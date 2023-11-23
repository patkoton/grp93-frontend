import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
  return (
    <div>
        <form action="" className='mt-8'>
            <div className=''>
                <label htmlFor="email" className='block font-medium text-base text-dark-blue'>
                    Email address
                </label>
                <input  type="email" 
                        id='email'
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Email'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="password" className='block font-medium text-base text-dark-blue'>
                    Password
                </label>
                <input  type="password" 
                        id='password'
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Password'
                />
            </div>
            <div className='flex justify-end mt-4'>
                <Link to='/' className='text-base font-medium text-blue'>Forgot password</Link>
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
    </div>
  )
}

export default LoginForm
