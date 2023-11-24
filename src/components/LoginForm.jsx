import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send a request to your backend API for authentication
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT/login', {
        email: email,
        password: password,
      });

      // Check the response from the server
      if (response.data.success) {
        setMessage('Login successful!');
        // Handle successful login, e.g., redirect to a dashboard
        navigate('/login');
      } else {
        setMessage('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
      setMessage('An error occurred. Please try again later.');
    }
  };
  return (
    <div>
        <form action="" onSubmit={handleLogin} className='mt-8'>
            <div className=''>
                <label htmlFor="email" className='block font-medium text-base text-dark-blue'>
                    Email address
                </label>
                <input  type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Email'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="password" className='block font-medium text-base text-dark-blue'>
                    Password
                </label>
                <input  type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Password'
                />
            </div>
            <div className='flex justify-end mt-4'>
                <Link to='/forgot-password' className='text-base font-medium text-blue'>Forgot password</Link>
            </div>
            <div className='mt-10'>
                <button type='submit'
                        className='w-full h-12 rounded-md bg-blue font-semibold text-base text-input-backg'
                >
                    Login
                </button>
            </div>
            <div className='flex justify-center items-center mt-4 pb-10'>
                <div className='font-normal text-base text-dark-gray'>
                    Don't have an account?
                    <Link to='/register' className='text-blue font-semibold'> Sign Up</Link>
                </div>
            </div>
        </form>

        {/* Display login status message */}
      {message && <p>{message}</p>}
    </div>
  )
}

export default LoginForm
