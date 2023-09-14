import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileThunk } from "../../redux/slices/User";
import { deleteKey, getLocalStorage } from "../../utils";
import { ACCESS_TOKEN, REQUEST_CARTS } from "../../constant";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { userProfile } = useSelector((state) => state.UserReducer);
  // call api get profile
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const actionThunk = getProfileThunk();
    dispatch(actionThunk);
    if (getLocalStorage(REQUEST_CARTS)) {
      navigate("/carts");
      deleteKey(REQUEST_CARTS);
    }
  }, []);
  return (
    <div>
      <div>
        <img
          src={userProfile?.avatar}
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
          }}
        />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={userProfile?.email} />
      </div>
    </div>
  );
}

export default Profile;
