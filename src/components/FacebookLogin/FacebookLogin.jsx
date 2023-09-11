import React from 'react'
import axios from 'axios';
import FacebookLogin from 'react-facebook-login'
export default function facebookLogin() {
    const responseFacebook = (response) => {
        axios({
          url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
          method: "post",
          data: {
            facebookToken: response.accessToken,
          },
        }).then((res) => {
          //Lưu vào localstorage
          localStorage.setItem("accessToken", res.data.content.accessToken);
        });
      };
  return (
    <div>
        <FacebookLogin
    appId="965418684747686"
    autoLoad={true}
    fields="name,email,picture"
    onClick={()=>{
        console.log(123);
    }}
    callback={responseFacebook} />
    </div>
  )
}
