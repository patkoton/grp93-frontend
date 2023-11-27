import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import ClientRegisterForm from '../components/ClientRegisterForm';


const ProfileButton = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='font-worksans'>
        <button className='px-5 py-3 flex items-center rounded-lg bg-blue border border-white text-white text-sm font-medium tracking-tighter' onClick={openModal}><FaPlus />&nbsp;Create Profile</button>
        <div className='my-10'>
          <ClientRegisterForm isOpen={isModalOpen} onClose={closeModal} />
        </div>
    </div>
  )
}

export default ProfileButton
