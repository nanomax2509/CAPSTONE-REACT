import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { deleteKey, getLocalStorage, saveLocalStorage } from "../../utils";
import { ACCESS_TOKEN, REQUEST_CARTS } from "../../constant";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { NavLink } from "react-router-dom";
// import FacebookLogin from "../../components/FacebookLogin/FacebookLogin";
const schemaLogin = Yup.object({
  email: Yup.string().email().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Must be at least 6 characters")
    .max(10, "Must be 10 characters or less"),
});

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: schemaLogin,

    onSubmit: async (values) => {
      try {
        console.log({ values });
        // call api login
        const resp = await axios.post(
          "https://shop.cyberlearn.vn/api/Users/signin",
          {
            password: values.password,
            email: values.email,
          }
        );
        console.log({ resp });

        // lưu vào storage
        saveLocalStorage(ACCESS_TOKEN, resp.data.content.accessToken);
        navigate("/profile");

        // public: ai cũng có thể gọi được hết.

        // private: cần phải xác định được danh tính bạn là ai thì mới được phép gọi những api đó.

        // tạo thẻ từ: chứa tất cả thông tin của các bạn.

        // accessToken: dựa vào đây để xem thử bạn có được phép gọi những api đó hay không.
        // redux. mỗi lần reload page => mất.
        // localStrogate. => không bị mất mỗi lần reload page.
      } catch (err) {
        console.log(err);
        setErrorMessage(
          "Registration failed. Email is already in use. Please use another email!!"
        );
      }
    },
  });

  return (
    <form className="login-input" onSubmit={formik.handleSubmit}>
      <h1 className="login-title">Login</h1>
      <hr className="m-5" />
      <div className="login-input">
        <label className="d-block">Email</label>
        <input
          className="w-25"
          type="text"
          name="email"
          {...formik.getFieldProps("email")}
        />
        {formik.errors.email && formik.touched.email && (
          <p>{formik.errors.email}</p>
        )}
      </div>
      <div>
        <label className="d-block">Password</label>
        <input
          className="w-25"
          type="password"
          name="password"
          {...formik.getFieldProps("password")}
        />
        {formik.errors.password && formik.touched.password && (
          <p>{formik.errors.password}</p>
        )}
      </div>
      <div className="d-flex login-btn-form ">
        <NavLink className={"login-navlink"} to="/register">
          Register now ?
        </NavLink>
        <button className="btn btn-success btn-login" type="submit">
          Login
        </button>
      </div>
      {/* <FacebookLogin /> */}
      {errorMessage && (
        <p className="text-danger login-error d-block">{errorMessage}</p>
      )}
    </form>
  );
}

export default Login;
