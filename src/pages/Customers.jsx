import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
//import ProfileButton from '../elements/ProfileButton';
import axios from 'axios';
import ClientRegisterForm from '../components/ClientRegisterForm';
import { FaPlus } from 'react-icons/fa6';
import { baseUrl } from '../shared';


const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);
  const [activeMembers, setActiveMembers] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const url = baseUrl + 'business/get-all-clients';
      try {
        const response = await axios.get(url);
        const allCustomers = response.data;

        setTotalCustomers(allCustomers.length);

        // Calculate total members
        const totalMembersCount = allCustomers.filter((customer) => customer.subscriptionStatus !== 'Non-Member').length;
        setTotalMembers(totalMembersCount);

        // Calculate active members
        const activeMembersCount = allCustomers.filter((customer) => customer.subscriptionStatus === 'Active').length;
        setActiveMembers(activeMembersCount);

        setCustomers(allCustomers);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  // Get current customers
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Layout>
      <div className={`p-6 ${isModalOpen ? '' : ''}`}>
        <div className="block md:flex justify-between items-center font-worksans">
          <h4 className='text-2xl font-bold text-dark-blue mb-4'>Customers</h4>
          <div className='font-worksans'>
            <button className='px-5 py-3 flex items-center rounded-lg bg-blue border border-white text-white text-sm font-medium tracking-tighter' onClick={openModal}><FaPlus />&nbsp;Create Profile</button>
            <div className=''>
              <ClientRegisterForm isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row mt-6'>
          <div className='flex flex-col md:w-1/3 border-[0.3px] border-r-0 md:border-r border-l-0 border-border-line2 py-5 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
            <div className='m-auto text-center'>
              <h5 className='text-xs font-medium text-dark-gray2'>TOTAL CUSTOMERS</h5>
              <p className='text-2xl font-semibold text-dark-blue mt-4'>{totalCustomers}</p>
            </div>
          </div>
          <div className='flex flex-col md:w-1/3 border-[0.3px] border-r-0 md:border-r border-l-0 border-border-line2 py-5 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
            <div className='m-auto text-center'>
              <h5 className='text-xs font-medium text-dark-gray2'>MEMBERS</h5>
              <p className='text-2xl font-semibold text-dark-blue mt-4'>{totalMembers}</p>
            </div>
          </div>
          <div className='flex flex-col md:w-1/3 border-[0.3px] border-l-0 border-r-0 border-border-line2 py-5 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
            <div className='m-auto text-center'>
              <h5 className='text-xs font-medium text-dark-gray2'>ACTIVE NOW</h5>
              <p className='text-2xl font-semibold text-dark-blue mt-4'>{activeMembers}</p>
            </div>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className="min-w-full bg-color1 border border-color2 mt-12 table-auto">
          <thead>
            <tr>
              <th className="py-2 px-4 text-xs font-medium text-color3">Name</th>
              <th className="py-2 px-4 text-xs font-medium text-color3">User ID</th>
              <th className="py-2 px-4 text-xs font-medium text-color3">Number of Orders</th>
              <th className="py-2 px-4 text-xs font-medium text-color3">Last Login</th>
              <th className="py-2 px-4 text-xs font-medium text-color3">Subscription Status</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer) =>  (
              <tr key={customer.id}>
                  <td className="py-2 px-4 border-b border-color2">
                      <div className='flex items-center'>
                          <div className='w-6 h-6 rounded-sm'>
                              <img src={customer.image} alt="" className='w-full' />
                          </div>
                          <div><h4 className="text-sm font-medium text-color4">{customer.name}</h4>
                              <p className="text-xs font-normal text-color5">{customer.email}</p>
                          </div>
                      </div>
                  </td>
                  <td className="py-2 px-4 border-b border-color2 text-sm font-normal text-color3">{customer.userId}</td>
                  <td className="py-2 px-4 border-b border-color2 text-sm font-normal text-color3">{customer.numberOfOrders}</td>
                  <td className="py-2 px-4 border-b border-color2 text-sm font-normal text-color3">{customer.lastLogin}</td>
                  <td className="py-2 px-4 border-b border-color2 text-sm font-normal text-color3"><div className={`rounded-2xl p-1 + ${customer.subscriptionStatus === "active" ? 'bg-color8 border border-color9' : 'bg-color6 border border-color7'}`}>{customer.subscriptionStatus}</div></td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(customers.length / customersPerPage) }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-1 px-3 py-1 bg-black ${currentPage === index + 1 ? 'font-bold' : ''}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      </div>
    </Layout>
  )
}

export default Customers
