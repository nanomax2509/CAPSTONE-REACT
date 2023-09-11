import React, { useState } from 'react';
import './Register.scss';
import { Field, Formik, useFormik } from 'formik';

// useHistory: v5 => useNavigate: v6
import { useNavigate } from 'react-router-dom';
// Yup để validate.
import * as Yup from 'yup';
import axios from 'axios';
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
const schemaRegister = Yup.object({
	email: Yup.string().email().required('Username is required'),
	userName: Yup.string()
		.required('Username is required')
		.min(2, 'Must be at least 2 characters')
		.max(10, 'Must be 10 characters or less'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Must be at least 6 characters')
		.max(10, 'Must be 10 characters or less'),
	confirmPassword: Yup.string()
		.required('Password is required')
		.oneOf([Yup.ref('password')], 'Confirm Password Must be matched') // yêu cầu password với confirmPassword giống nhau.
		.min(6, 'Must be at least 6 characters')
		.max(10, 'Must be 10 characters or less'),
	phone: Yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
});

// const validate = (values) => {
// 	const errors = {};
// 	if (!values.userName) {
// 		errors.userName = 'Required';
// 	} else if (values.userName.length > 15) {
// 		errors.userName = 'Must be 15 characters or less';
// 	}

// 	if (!values.password) {
// 		errors.password = 'Required';
// 	} else if (values.password.length > 20) {
// 		errors.password = 'Must be 20 characters or less';
// 	}
// 	return errors;
// };

// Nếu sử dụng các component của formik (Field, ErrorMessage) thì phải bọc nó ở bên trong component <Formik> thì mới hoạt động được.

// chọn 1 trong 2 cách sử dụng.
// 1. useFormik
// 2. <Formik>

function RegisterFormik() {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');

	const formik = useFormik({
		initialValues: {
			userName: '',
			password: '',
			confirmPassword: '',
			email: '',
			phone: '',
			gender: true,
		},

		validationSchema: schemaRegister, // sử dụng thư viện để validate

		// validate, // validate thủ công

		onSubmit: async (values) => {
			try {
				const resp = await axios.post(
					'https://shop.cyberlearn.vn/api/Users/signup',
					{
						email: values.email,
						password: values.password,
						name: values.userName,
						gender: values.gender,
						phone: values.phone,
					}
				);

				console.log(resp);
				// nếu đăng ký thành công thì chuyển về trang login.
				navigate('/login');
			} catch (err) {
				
				console.log(err);
				setErrorMessage('Registration failed. Email is already in use. Please use another email!!'); 
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<h1 className='register-title'>Register</h1>
			<div className="row">
				<div className='col-6  register-col'>
					<label className='d-block '>Email: </label>
					<input className="form-control register-input"
						type='text'
						name='email'
						// value={formik.values.userName}
						// onChange={formik.handleChange}
						// onBlur={formik.handleBlur}
						{...formik.getFieldProps('email')}
					/>

					{/* touched: khi nào người dùng đã ghé qua field userName thì mới validate */}
					{formik.errors.email && formik.touched.email && (
						<p className='text-danger'>{formik.errors.email}</p>
					)}
				</div>

				<div className='col-6 register-col'>
					<label className='d-block '>User Name: </label>
					<input className="form-control register-input"
						type='text'
						name='userName'
						// value={formik.values.userName}
						// onChange={formik.handleChange}
						// onBlur={formik.handleBlur}
						{...formik.getFieldProps('userName')}
					/>

					{/* touched: khi nào người dùng đã ghé qua field userName thì mới validate */}
					{formik.errors.userName && formik.touched.userName && (
						<p className='text-danger'>{formik.errors.userName}</p>
					)}
				</div>

				<div className='col-6 register-col'>
					<label className='d-block '>Password: </label>
					<input className="form-control register-input"
						type='text'
						name='password'
						// value={formik.values.password}
						// onChange={formik.handleChange}
						// onBlur={formik.handleBlur}

						{...formik.getFieldProps('password')}
					/>

					{formik.errors.password && formik.touched.password && (
						<p className='text-danger'>{formik.errors.password}</p>
					)}
				</div>
				<div className='col-6 register-col'>
					<label className='d-block '>Phone: </label>
					<input className="form-control register-input"
						type='string'
						name='phone'
						// value={formik.values.userName}
						// onChange={formik.handleChange}
						// onBlur={formik.handleBlur}
						{...formik.getFieldProps('phone')}
					/>

					{/* touched: khi nào người dùng đã ghé qua field userName thì mới validate */}
					{formik.errors.phone && formik.touched.phone && (
						<p className='text-danger'>{formik.errors.phone}</p>
					)}
				</div>
				<div className='col-6 register-col'>
					<label className='d-block '>Confirm Password: </label>
					<input className="form-control register-input "
						type='text'
						name='confirmPassword'
						// value={formik.values.confirmPassword}
						// onChange={formik.handleChange}
						// onBlur={formik.handleBlur}

						{...formik.getFieldProps('confirmPassword')}
					/>

					{formik.errors.confirmPassword && formik.touched.confirmPassword && (
						<p className='text-danger'>{formik.errors.confirmPassword}</p>
					)}
				</div>
				<div className="col-6 register-col">
					<label className="d-block">Gender: </label>
					<div className="form-check d-inline mr-4">
						<input
							className="form-check-input"
							type="radio"
							name="gender"
							value={true}
							checked={formik.values.gender === true}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<label className="form-check-label ml-1" htmlFor="gender">
							Male
						</label>
					</div>
					<div className="form-check d-inline">
						<input
							className="form-check-input"
							type="radio"
							name="gender"
							value={false}
							checked={formik.values.gender === false}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<label className="form-check-label ml-1" htmlFor="gender">
							Female
						</label>
					</div>
					{formik.errors.gender && formik.touched.gender && (
						<p className="text-danger">{formik.errors.gender}</p>
					)}
				</div>
			</div>

			<button className='btn-success btn btn-submit' type='submit'>Submit</button>
			{errorMessage && <p className="text-danger register-error">{errorMessage}</p>}
		</form>
	);
}

export default RegisterFormik;
