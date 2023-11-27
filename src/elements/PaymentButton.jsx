import axios from 'axios';
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { baseUrl } from '../shared';


const PaymentButton = () => {
    const getAuthToken = () => {
        // Implement logic to get the authentication token from wherever it's stored (e.g., localStorage, Redux store)
        const auth_token = localStorage.getItem('jwtToken');
        console.log(auth_token);
        // Return the authentication token
        return auth_token;
      };

    const handleClick = async () => {
        const url = baseUrl + 'service/initialize/65647138ee33c6ddf0ee364a';
        try {
          // Make a GET request to your endpoint
          const authToken = getAuthToken();
          console.log(authToken);

            // Send POST request to the backend API with the authentication token in the headers
            const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
            });
    
          // Handle the response, e.g., log it or update state
          console.log(response.data);
        } catch (error) {
          // Handle errors, e.g., show an error message
          console.error('Error fetching data:', error);
        }
    };

  return (
    <div className='font-worksans'>
        <button className='px-5 py-3 flex items-center rounded-lg bg-blue border border-white text-white text-sm font-medium tracking-tighter' 
            onClick={handleClick}><FaPlus />&nbsp;Click to Pay
        </button>
    </div>
  )
}

export default PaymentButton
