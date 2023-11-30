import React, { useState } from 'react'
import axios from 'axios';
import { baseUrl } from '../shared';

const InvoiceRegisterForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        clientId: '',
        amount: '',
        dueDate: '',
      });
    const [message, setMessage] = useState('');


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const getAuthToken = () => {
        // Implement logic to get the authentication token from wherever it's stored (e.g., localStorage, Redux store)
        const auth_token = localStorage.getItem('jwtToken');
        // Return the authentication token
        return auth_token;
      };

    const handleSubmit = async (e) => {
        const url = baseUrl + 'invoice/create-invoice';
        e.preventDefault();

        try {
          // Send POST request to the backend API
          const authToken = getAuthToken();

            // Send POST request to the backend API with the authentication token in the headers
            const response = await axios.post(url, formData, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
            });
    
          // Handle response, e.g., show success message, close modal, etc.
          setMessage('Invoice Created');
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
                        <label htmlFor="clientId" className='block font-medium text-base text-dark-blue'>
                            Client ID
                        </label>
                        <input  type="text" 
                                name="clientId" 
                                value={formData.clientId} 
                                onChange={handleChange}
                                className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                                placeholder='Client Id'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="amount" className='block font-medium text-base text-dark-blue'>
                            Amount
                        </label>
                        <input  type="number" 
                                name="amount" 
                                value={formData.amount} 
                                onChange={handleChange}
                                className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                                placeholder='Amount'
                        />
                    </div>
                    <div className='mt-4'>
                        <label htmlFor="dueDate" className='block font-medium text-base text-dark-blue'>
                            Due Date
                        </label>
                        <input  type="date" 
                                name="dueDate" 
                                value={formData.dueDate} 
                                onChange={handleChange}
                                className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                                placeholder='Due Date'
                        />
                    </div>
                    <div className='mt-10'>
                        <button type='submit'
                                onClick={handleSubmit}
                                className='w-full h-12 rounded-md bg-blue font-semibold text-base text-input-backg'
                        >
                            Create Invoice
                        </button>
                    </div>
                </form>
                {/* Display success or error message */}
                {message && <p className='-mt-10'>{message}</p>}
            </div>
    </div>
  )
}

export default InvoiceRegisterForm
