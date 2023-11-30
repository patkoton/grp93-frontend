import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
// import InvoiceButton from '../elements/InvoiceButton'
import InvoiceRegisterForm from '../components/InvoiceRegisterForm';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa6'
import { baseUrl } from '../shared';

const Invoice = () => {
  const [invoices, setInvoices] = useState([]);
  const [totalInvoices, setTotalInvoices] = useState(0);
  const [paidInvoices, setPaidInvoices] = useState(0);
  const [outstandingInvoices, setOutstandingInvoices] = useState(0);
  const [overdueInvoices, setOverdueInvoices] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(10);
  const [allInvoice, setAllInvoice] = useState([]);
  // const [information, setInformation] = useState([])

  useEffect(() => {
    const getAuthToken = () => {
      // Implement logic to get the authentication token from wherever it's stored (e.g., localStorage, Redux store)
      const auth_token = localStorage.getItem("jwtToken");
      // Return the authentication token
      return auth_token;
    };
    // Fetch data from the backend API
    const fetchData = async () => {
      const url = baseUrl + 'invoice/invoice-information';
      try {
        const authtoken = getAuthToken();
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authtoken}`,
          },
        });
        const allInvoices = response.data;
        // const informations = allInvoices.information
        setAllInvoice(allInvoices)
        
        // setInformation(informations)

        // Calculate total invoices
        setTotalInvoices(allInvoices.allInvoice);

        // Calculate paid invoices
        const paidInvoicesCount = allInvoices.allInvoice
        setPaidInvoices(paidInvoicesCount);

        // Calculate outstanding invoices
        const outstandingInvoicesCount = allInvoices.outstanding
        setOutstandingInvoices(outstandingInvoicesCount);

        // Calculate overdue invoices
        const overdueInvoicesCount = allInvoices.overdue
        setOverdueInvoices(overdueInvoicesCount);

        setInvoices(allInvoices);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  },);

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
          <h4 className='text-2xl font-bold text-dark-blue mb-4'>Invoice</h4>
          <div className='font-worksans'>
            <button className='px-5 py-3 flex items-center rounded-lg bg-blue border border-white text-white text-sm font-medium tracking-tighter' onClick={openModal}><FaPlus />&nbsp;Create Invoice</button>
            <div className=''>
              <InvoiceRegisterForm isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row mt-6'>
          <div className='flex flex-col md:w-1/4 border-[0.3px] border-r-0 md:border-r border-l-0 border-border-line2 py-5 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
            <div className='m-auto text-center'>
              <h5 className='text-xs font-medium text-dark-gray2'>ALL INVOICES</h5>
              <p className='text-2xl font-semibold text-dark-blue mt-4'>${totalInvoices}</p>
            </div>
          </div>
          <div className='flex flex-col md:w-1/4 border-[0.3px] border-r-0 md:border-r border-l-0 border-border-line2 py-5 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
            <div className='m-auto text-center'>
              <h5 className='text-xs font-medium text-dark-gray2'>PAID INVOICES</h5>
              <p className='text-2xl font-semibold text-dark-blue mt-4'>${paidInvoices}</p>
            </div>
          </div>
          <div className='flex flex-col md:w-1/4 border-[0.3px] border-r-0 md:border-r border-l-0 border-border-line2 py-5 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
            <div className='m-auto text-center'>
              <h5 className='text-xs font-medium text-dark-gray2'>OUTSTANDING INVOICES</h5>
              <p className='text-2xl font-semibold text-dark-blue mt-4'>${outstandingInvoices}</p>
            </div>
          </div>
          <div className='flex flex-col md:w-1/4 border-[0.3px] border-l-0 border-r-0 border-border-line2 py-5 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
            <div className='m-auto text-center'>
              <h5 className='text-xs font-medium text-dark-gray2'>OVERDUE INVOICES</h5>
              <p className='text-2xl font-semibold text-dark-blue mt-4'>${overdueInvoices}</p>
            </div>
          </div>
        </div>

        <div className='overflow-x-auto'>
          <table className="min-w-full table-auto bg-color1 border border-color2 mt-12">
          <thead>
            <tr>
              <th className="py-2 pl-2 text-xs font-medium text-color3"><input type="checkbox" /></th>
              <th className="py-2 pr-4 text-xs font-medium text-color3">Client</th>
              <th className="py-2 px-4 text-xs font-medium text-color3">Invoice Number</th>
              <th className="py-2 px-4 text-xs font-medium text-color3">Issue Date</th>
              <th className="py-2 px-4 text-xs font-medium text-color3">Due Date</th>
              <th className="py-2 px-4 text-xs font-medium text-color3">Amount</th>
              <th className="py-2 px-4 text-xs font-medium text-color3">Status</th>
            </tr>
          </thead>
          <tbody>
            {allInvoice?.data?.map((invoice) => (
              <tr key={invoice.id}>
                <td className="py-2 px-4 border-b border-color2">
                  <input type="checkbox" />
                </td>
                <td className="py-2 px-4 border-b border-color2">
                  <div>
                    <h4 className="text-sm font-medium text-color4">{invoice.username}</h4>
                    <p className="text-xs font-normal text-color5">{invoice.email}</p>
                  </div>
                </td>
                <td className="py-2 px-4 border-b border-color2 text-sm font-normal text-color3">{invoice._id}</td>
                <td className="py-2 px-4 border-b border-color2 text-sm font-normal text-color3">{invoice.created_at}</td>
                <td className="py-2 px-4 border-b border-color2 text-sm font-normal text-color3">{invoice.dueDate}</td>
                <td className="py-2 px-4 border-b border-color2 text-sm font-normal text-color3">{invoice.amount}</td>
                <td className="py-2 px-4 border-b border-color2 text-sm font-normal text-color3"><div className={`rounded-2xl p-1 + ${invoice.status === "paid" ? 'bg-color8 border border-color9' : 'bg-color6 border border-color7'}`}>{invoice.status}</div></td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(invoices.length / invoicesPerPage) }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-1 px-3 py-1 bg-dark-gray ${currentPage === index + 1 ? 'font-bold' : ''}`}
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

export default Invoice
