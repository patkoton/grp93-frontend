import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../shared';

const ClientRegisterForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        clientName: '',
        clientPhoneNumber: '',
        clientEmail: '',
      });

    const [message, setMessage] = useState('');

    //const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        const url = baseUrl + 'client/create-client';
        e.preventDefault();
        console.log(formData);

        try {
          // Send POST request to the backend API
          const response = await axios.post(url, formData);
    
          // Handle response, e.g., show success message, close modal, etc.
          setMessage('Email sent for creation of client, kindly check to login');
          console.log(response.data);
          onClose(); // Close the modal
        } catch (error) {
          // Handle errors, e.g., show error message
          console.error(error);
          setMessage('Submission failed. Please try again.')
        }
      };

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
        <div className="absolute w-full h-full bg-gray opacity-75" onClick={onClose}></div>
            <div className="z-10 bg-white p-4 rounded shadow-md">
                <form action="" className='mt-8'>
                    <div>
                        <label htmlFor="clientName" className='block font-medium text-base text-dark-blue'>
                            Client Name
                        </label>
                        <input  type="text" 
                                name="clientName" 
                                value={formData.clientName} 
                                onChange={handleChange}
                                className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                                placeholder='Client Name'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="clientPhoneNumber" className='block font-medium text-base text-dark-blue'>
                            Phone Number
                        </label>
                        <input  type="tel" 
                                name="clientPhoneNumber" 
                                value={formData.clientPhoneNumber} 
                                onChange={handleChange}
                                className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                                placeholder='Phone Number'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="clientEmail" className='block font-medium text-base text-dark-blue'>
                            Email Address
                        </label>
                        <input  type="email" 
                                name="clientEmail" 
                                value={formData.clientEmail} 
                                onChange={handleChange}
                                className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                                placeholder='Email'
                        />
                    </div>
                    <div className='mt-10'>
                        <button type='submit'
                                onClick={handleSubmit}
                                className='w-full h-12 rounded-md bg-blue font-semibold text-base text-input-backg'
                        >
                            Create Client
                        </button>
                    </div>
                    <div className='flex justify-center items-center mt-4 pb-10'>
                        <div className='font-normal text-base text-dark-gray'>
                            Already a Client?
                            <Link to='/client-login' className='text-blue font-semibold'> Login</Link>
                        </div>
                    </div>
                </form>
                {/* Display success or error message */}
                {message && <p className='-mt-10'>{message}</p>}
            </div>
    </div>
  )
}

export default ClientRegisterForm
