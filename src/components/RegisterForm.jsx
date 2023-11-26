import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../shared';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        company_name: '',
        phone_number: '',
        street: '',
        city: '',
        state: '',
        zip_code: '',
        forgotPassword: false,
    });

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        const url = baseUrl + 'business/sign-up';
        e.preventDefault();
    
        try {
          const response = await axios.post(url, formData);
    
          // Assuming the server responds with a JWT token
          const { token } = response.data;
    
          // Handle the JWT token (e.g., store it in localStorage)
          localStorage.setItem('jwtToken', token);
          setMessage('Account successfully created!');
    
          // Optionally, you can redirect the user to another page after successful registration
          navigate('/login');
        } catch (error) {
          console.error('Registration failed:', error.message);
          setMessage('An error occurred. Please try again.');
        }
      };

  return (
    <div>
        <form action="" onSubmit={handleSubmit} className='mt-8'>
            <div>
                <label htmlFor="name" className='block font-medium text-base text-dark-blue'>
                    Full name
                </label>
                <input  type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Full name'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="username" className='block font-medium text-base text-dark-blue'>
                    Username
                </label>
                <input  type="text" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Username'
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
                <label htmlFor="company_name" className='block font-medium text-base text-dark-blue'>
                    Name of enterprise
                </label>
                <input  type="text" 
                        name="company_name" 
                        value={formData.company_name} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Name of enterprise'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="phone_number" className='block font-medium text-base text-dark-blue'>
                    Phone Number
                </label>
                <input  type="tel" 
                        name="phone_number" 
                        value={formData.phone_number} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Phone Number'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="street" className='block font-medium text-base text-dark-blue'>
                    Street Address
                </label>
                <input  type="text" 
                        name="street" 
                        value={formData.street} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Street'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="city" className='block font-medium text-base text-dark-blue'>
                    City
                </label>
                <input  type="text" 
                        name="city" 
                        value={formData.city} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='City'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="state" className='block font-medium text-base text-dark-blue'>
                    State
                </label>
                <input  type="text" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='State'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="zip_code" className='block font-medium text-base text-dark-blue'>
                    Zip Code
                </label>
                <input  type="text" 
                        name="zip_code" 
                        value={formData.zip_code} 
                        onChange={handleChange}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Zip Code'
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




// <div className='mt-4'>
//                 <label htmlFor="confirmpassword" className='block font-medium text-base text-dark-blue'>
//                     Confirm password
//                 </label>
//                 <input  type="password" 
//                         name="confirmPassword"
//                         value={formData.confirmPassword}
//                         onChange={handleChange}
//                         className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
//                         placeholder='Password'
//                 />
//             </div>