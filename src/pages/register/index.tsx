import { useFormik } from "formik";
import React from "react";
import { signup } from "src/services/user.service";
import * as Y from "yup"

// const field ={
//   name: "userName",
//   onChange: () =>{

//   },
//   value:"",
// }
const registerSchema =Y.object({
  email:Y.string().email().required(),
  userName: Y.string().min(5,"User name phải lớn hơn 5 kí tự").max(20,"User name phải bé hơn 20 kí tự").required("Bắt buộc nhập Username"),
  password: Y.string().min(5,"Password phải lớn hơn 5 kí tự").max(20,"Password phải bé hơn 20 kí tự").required("Bắt buộc nhập Password"),
  confirmPassword: Y.string().min(5,"Confirm password phải lớn hơn 5 kí tự").max(20,"Confirm Password phải bé hơn 20 kí tự").required("Bắt buộc nhập Confirm password"),


});

export type TParamsRegister ={
  email:string,
  password:string,
  name:string,
  gender:boolean,
  phone:string,
}



function Register() {
  const formik = useFormik({
    initialValues:{
      userName: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: registerSchema,
    // validate:(value) =>{
    //   const errors: Partial<typeof value> = {};
    //   if(!value.userName){
    //     errors.userName = "User name yêu cầu bắt buộc.";
    //   }
    //   else if( value.userName.length >20 || value.userName.length <5){
    //     errors.userName="User name phải từ 5 đến 20 kí tự.  "
    //   }

    //   if(!value.password){
    //     errors.password = "Password yêu cầu bắt buộc.";
    //   }
    //   else if( value.password.length >20 || value.password.length <5){
    //     errors.password="Password phải từ 5 đến 20 kí tự.  "
    //   }

    //   if(!value.confirmPassword){
    //     errors.confirmPassword = "Confirm Password yêu cầu bắt buộc.";
    //   }
    //   else if( value.confirmPassword !== value.password){
    //     errors.confirmPassword="Confirm Password trùng với Password  "
    //   }
    // },
    onSubmit: (value) =>{
      const data: TParamsRegister ={
        email:'',
        gender: true,
        phone:  '0123456789',
        password: value.password,
        name: value.userName,
      };
      signup(data)
        .then(()=> {
          navigate('/login');
      })
        .catch(()=>{
          alert("Error");
      });
    }
  })
  return (
  <form onSubmit={formik.handleSubmit}>
    <input
    {...formik.getFieldProps("userName")}
    // value={formik.values.userName} name="userName" onChange={formik.handleChange} placeholder="User name"
    />
    {formik.touched.userName &&  formik.errors.userName && <p>{formik.errors.userName}</p>}
    <br />
    <input
       {...formik.getFieldProps("password")}
    // value={formik.values.password} name="password" onChange={formik.handleChange} placeholder="Password"
    />
    {formik.touched.password &&  formik.errors.password && <p>{formik.errors.password}</p>}

    <br />
    <input
       {...formik.getFieldProps("confirmPassword")}
        // value={formik.values.confirmPassword} name="confirmPassword" onChange={formik.handleChange} placeholder="Confirm password"
        /> 
    {formik.touched.confirmPassword &&  formik.errors.confirmPassword && <p>{formik.errors.confirmPassword}</p>}

    <br />
    <button>Submit</button>
  </form>
  )
  ;
}

export default Register;
