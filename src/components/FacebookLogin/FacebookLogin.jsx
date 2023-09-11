import React from 'react'
import FacebookLogin from 'react-facebook-login'
export default function facebookLogin() {
    const responseFacebook = (responsive)=>{
        console.log(responsive);
    }
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
