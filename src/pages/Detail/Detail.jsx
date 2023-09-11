import React, { useEffect } from "react";
import DetailProduct from "../../components/DetailProduct/DetailProduct";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByIdAction,
  getProductByIdThunk,
  setProductDetail,
} from "../../redux/slices/Product";
import CardProduct from "../../components/CardProduct/CardProduct";
import { useScrollTop } from "../../hooks/useScrollTop";
import ListProduct from "../../components/ListProduct/ListProduct";
import { Skeleton } from "antd";
import "./Detail.scss";
import { getProductByIdApi } from "../../services/product.services";

function Detail() {
  const params = useParams();
  const dispatch = useDispatch();
  const { productDetail, isLoading } = useSelector(
    (state) => state.ProductReducer
  );
  const getProductById = async (id) => {
    try {
      const actionThunk = getProductByIdThunk(id);
      dispatch(actionThunk);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductById(params.productID);
  }, [params.productID]);
  useEffect(() => {
    // 1. IIFE.
    (async (id, name) => {
      // id = 8, name = 'dai'
      const resp = await axios.get(
        `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
      );
    })(8, "dai");
  }, [params.productID]);

  if (isLoading) {
    return <Skeleton active />;
  }

  return (
    <div className="DetailContain">
      <DetailProduct />
      <h3 className="text-center mb-5 container">Relate Product</h3>

      <ListProduct
        className="list-product-detail"
        listProduct={productDetail.relatedProducts}
      />
    </div>
  );
}

export default Detail;
