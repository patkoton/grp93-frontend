import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
  return (
    <div>
        <form action="" className='mt-8'>
            <div>
                <label htmlFor="fullname" className='block font-medium text-base text-dark-blue'>
                    Full name
                </label>
                <input  type="text" 
                        id='fullname'
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Full name'
                />
            </div>
            <div className='mt-4'>
                <label htmlFor="enterprise" className='block font-medium text-base text-dark-blue'>
                    Name of enterprise
                </label>
                <input  type="text" 
                        id='enterprise'
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Name of enterprise'
                />
            </div>
            <div className='mt-4'>
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
            <div className='mt-4'>
                <label htmlFor="confpassword" className='block font-medium text-base text-dark-blue'>
                    Confirm password
                </label>
                <input  type="password" 
                        id='confpassword'
                        className='w-full h-12 rounded-md bg-input-backg border border-border-line shadow shadow-shadow-color px-5 placeholder:px-1 mt-2'
                        placeholder='Password'
                />
            </div>
            <div className="flex gap-2 items-center mt-4">
                <input
                    type="checkbox"
                    id="myCheckbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-blue focus:ring-blue border-blue rounded"
                />
                <label htmlFor="myCheckbox" className="text-dark-gray text-base font-medium">
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
    </div>
  )
}

export default RegisterForm
