import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../shared';

const ClientLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    const url = baseUrl + 'auth/login-client';
    e.preventDefault();

    try {
      const response = await axios.post(
        url,
        {
          username,
          password,
        }
      );

      // Assuming the backend returns a JWT token upon successful login
      const jwtToken = response.data.token;

      // Save the JWT token to local storage or state for future requests
      localStorage.setItem('jwtToken', jwtToken);
      setMessage('Login Successful!');
      navigate('/dashboard')
      // Redirect or perform any other actions after successful login
      //navigate('/dashboard')
    } catch (error) {
      console.error('Login failed', error);
      setMessage('Login failed, try again!');
    }
  };
  
  return (
    <div>
        <form action="" onSubmit={handleLogin} className='mt-8'>
            <div className=''>
                <label htmlFor="username" className='block font-medium text-base text-dark-blue'>
                    Username
                </label>
                <input  type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Username'
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
                    <Link to='/' className='text-blue font-semibold'> Sign Up</Link>
                </div>
            </div>
        </form>

        {/* Display login status message */}
      {message && <p className='-mt-10'>{message}</p>}
    </div>
  )
}

export default ClientLoginForm
