import React from 'react'
import { FaPlus } from "react-icons/fa6";


const ProfileButton = () => {
  return (
    <div className='font-worksans'>
        <button className='px-5 py-3 flex items-center rounded-lg bg-blue border border-white text-white text-sm font-medium tracking-tighter'><FaPlus />&nbsp;Create Profile</button>
    </div>
  )
}

export default ProfileButton
