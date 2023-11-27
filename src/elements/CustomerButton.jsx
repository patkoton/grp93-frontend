import React from 'react'
import { FaPlus } from "react-icons/fa6";


const CustomerButton = () => {
  
  return (
    <div className='font-worksans'>
        <button className='px-5 py-2 flex items-center rounded-lg bg-transparent text-dark-blue text-sm font-medium tracking-tighter'><FaPlus />&nbsp;Add New Customer</button>
    </div>
  )
}

export default CustomerButton
