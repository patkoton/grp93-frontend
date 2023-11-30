import React from 'react'
import ClientLoginForm from '../components/ClientLoginForm'

const ClientLogin = () => {
  return (
    <div>
        <div className='min-h-screen flex flex-col md:flex-row font-worksans'>
            <div className='flex flex-col md:w-1/2 bg-authImg bg-cover bg-no-repeat bg-center'></div>
            <div className='flex flex-col justify-center items-center md-w-1/2 bg-white px-5 md:px-20 py-24 md:overflow-y-auto'>
                <div className='w-full h-full'>
                    <h4 className='font-medium text-3xl md:text-4xl text-dark-blue tracking-tighter text-center md:text-start'>Sign in as a Client</h4>
                    <ClientLoginForm />
                </div> 
            </div>
        </div>
    </div>
  )
}

export default ClientLogin
