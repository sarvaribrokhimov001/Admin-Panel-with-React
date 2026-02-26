import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../styles/LoginForm.css";

const LoginForm = () => {
    const [formData , setFormData] = useState({
        username: "kevinryan",
        password: "kev02937@"
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData , 
            [e.target?.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://fakestoreapi.com/auth/login` , formData).then(data => {
            if(data?.data?.token) {
                toast.success('Successfully Validation');
                localStorage.setItem('token' , data?.data?.token);
                navigate('/dashboard'); 
            } else {
                toast.error('Error');
            } 
        })
        console.log(formData);
    }

  return (
    <div className='login__container'>
        <form className='login__form' onSubmit={handleSubmit}>
            <input
            className='login__input' 
            type="text" 
            placeholder='username' 
            value={formData?.username} 
            name='username'
            onChange={handleChange}
            />

            <input
            className='login__input' 
            type="password" 
            placeholder='password' 
            value={formData?.password} 
            name='password'
            onChange={handleChange}
            />

            <button className='login__btn'> Submit </button>
        </form>
    </div>
  )
}
export default LoginForm