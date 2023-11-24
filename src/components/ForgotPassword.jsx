import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      // Send a request to your backend API to initiate the password reset process
      const response = await axios.post('YOUR_BACKEND_API_ENDPOINT/reset-password', {
        email: email,
      });

      // Check the response from the server
      if (response.data.success) {
        setMessage('Password reset email sent successfully!');
        navigate('/login');
      } else {
        setMessage('Failed to send password reset email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending password reset email:', error.message);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      {/* Forgot Password form */}
      <form onSubmit={handleForgotPassword}>
        {/* Forgot Password form fields */}
        <input  type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                placeholder="Email" />
        <button type="submit"
                className='w-full h-12 rounded-md bg-blue font-semibold text-base text-input-backg'
        >
        Reset Password</button>
      </form>

      {/* Display success or error message */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
