import React from 'react'
import { Link } from 'react-router-dom'
import google from '../assets/images/google-logo.svg'
import BusinessRegisterForm from '../components/BusinessRegisterForm'

const BusinessRegister = () => {
  return (
    <div>
        <div className='min-h-screen flex flex-col md:flex-row font-worksans'>
            <div className='flex flex-col md:w-1/2 bg-authImg bg-cover bg-no-repeat bg-center'></div>
            <div className='flex flex-col justify-center md-w-1/2 bg-white px-5 md:px-20 py-10 md:overflow-y-auto'>
                <div className='w-full h-full'>
                    <h4 className='font-medium text-3xl md:text-4xl text-dark-blue tracking-tighter text-center md:text-start'>Create a Business Account</h4>
                    <div className='h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color mt-4'>
                        <Link to="/">
                            {/* <div className='h-full flex justify-center items-center'>
                                <div className='flex gap-2 items-center'>
                                    <img src={google} alt="" />
                                    <span className='font-semibold text-base text-dark-blue'>Sign up with Google</span>
                                </div> 
                            </div> */}
                        </Link>
                        <div className='flex items-center gap-2 mt-4'>
                            <div className='w-[45%] h-[1px] md:w-[204px] bg-light-gray'></div>
                            <span className='font-semibold text-base text-dark-blue'>OR</span>
                            <div className='w-[45%] h-[1px] md:w-[204px] bg-light-gray'></div>
                        </div>
                        <BusinessRegisterForm />
                    </div>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default BusinessRegister
