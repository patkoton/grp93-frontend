import React from 'react'
import ForgotPasswordForm1 from '../components/ForgotPasswordForm1'

const BusinessForgotPassword = () => {
  return (
    <div>
        <div className='min-h-screen flex flex-col md:flex-row font-worksans'>
            <div className='flex flex-col md:w-1/2 bg-authImg bg-cover bg-no-repeat bg-center'></div>
            <div className='flex flex-col justify-center items-center md-w-1/2 bg-white px-5 pt-44 md:px-20 md:overflow-y-auto'>
                <div className='w-full h-full'>
                    <h4 className='font-medium text-3xl md:text-4xl text-dark-blue tracking-tighter'>Forgot Password?</h4>
                    <ForgotPasswordForm1 />
                </div> 
            </div>
        </div>
    </div>
  )
}

export default BusinessForgotPassword
