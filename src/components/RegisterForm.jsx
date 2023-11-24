import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        enterprise: '',
        email: '',
        password: '',
        confirmPassword: '',
        forgotPassword: false,
    });

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
        ...formData,
        [e.target.name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the password and confirm password match
        if (formData.password !== formData.confirmPassword) {
        console.error('Password and Confirm Password do not match');
        // Handle the mismatch (e.g., display error message)
        setMessage('Password and Confirm Password do not match!');
        return;
        }

        const endpoint = formData.forgotPassword ? '/api/forgot-password' : '/api/register';

        try {
        const response = await axios.post(endpoint, formData);
        console.log('Request successful:', response.data);
        // Handle successful request (e.g., show success message, redirect user)
        setMessage('Request successful. You can now login.');
        navigate('/login');
        } catch (error) {
        console.error('Request error:', error.message);
        // Handle request errors (e.g., display error message)
        setMessage('An error occurred. Please try again later.');
        }
    };

  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='mt-8'>
            <div>
                <label htmlFor="username" className='block font-medium text-base text-dark-blue'>
                    Full name
                </label>
                <input  type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Full name'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="enterprise" className='block font-medium text-base text-dark-blue'>
                    Name of enterprise
                </label>
                <input  type="text" 
                        name="enterprise" 
                        value={formData.enterprise} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Name of enterprise'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="email" className='block font-medium text-base text-dark-blue'>
                    Email address
                </label>
                <input  type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Email'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="password" className='block font-medium text-base text-dark-blue'>
                    Password
                </label>
                <input  type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Password'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="confirmpassword" className='block font-medium text-base text-dark-blue'>
                    Confirm password
                </label>
                <input  type="password" 
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Password'
                />
            </div>
            <div className="flex gap-2 items-center mt-4">
                <input
                    type="checkbox"
                    name="forgotPassword"
                    checked={formData.forgotPassword}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue focus:ring-blue border-blue rounded"
                />
                <label htmlFor="forgotPassword" className="text-dark-gray text-base font-medium">
                    Remember password
                </label>
                </div>
            <div className='mt-10'>
                <button type='submit'
                        className='w-full h-12 rounded-md bg-blue font-semibold text-base text-input-backg'
                >
                    Sign Up
                </button>
            </div>
            <div className='flex justify-center items-center mt-4 pb-10'>
                <div className='font-normal text-base text-dark-gray'>
                    Already have an account?
                    <Link to='/login' className='text-blue font-semibold'> Login</Link>
                </div>
            </div>
        </form>

        {/* Display success or error message */}
      {message && <p>{message}</p>}
    </div>
  )
}

export default RegisterForm
