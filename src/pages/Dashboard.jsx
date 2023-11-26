import React from 'react'
import Layout from '../layout/Layout'
import { Bag2, DocumentText, People } from 'iconsax-react'
import ProductInvoice from '../elements/ProductButton'
import InvoiceButton from '../elements/InvoiceButton'
import CustomerButton from '../elements/CustomerButton'

const Dashboard = () => {
  return (
    <Layout>
    <div className='p-6'>
      <div className="flex justify-between items-center font-worksans">
        <h4 className='text-2xl font-bold text-dark-blue'>Dashboard</h4>
        <InvoiceButton />
      </div>
      <div className='flex flex-col md:flex-row mt-6'>
        <div className='flex flex-col md:w-1/4 border-t-[0.3px] border-b-[0.3px] border-border-line2 pt-3 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
          <div className='px-6'>
            <div className='w-6 h-6 rounded-full bg-dark-gray flex justify-center items-center'>
              <Bag2 size="16" color="#FFFFFF" />
            </div>
            <h5 className='text-xs font-medium text-dark-gray2 mt-4'>TOTAL PRODUCTS</h5>
            <p className='text-2xl font-semibold text-dark-blue mt-4'>300</p>
          </div> 
          <div className='flex justify-center'>
            <div className='bg-border-line2 w-10/12 h-[0.3px]'></div>
          </div>
          <div className='flex justify-center'>
            <ProductInvoice />
          </div>
        </div>
        <div className='hidden md:flex items-center'>
          <div className='w-[0.3px] h-[100px] bg-border-line2'></div>
        </div>


        <div className='flex flex-col md:w-1/4 border-t-[0.3px] border-b-[0.3px] border-border-line2 pt-3 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
          <div className='px-6'>
            <div className='w-6 h-6 rounded-full bg-dark-gray flex justify-center items-center'>
              <People size="16" color="#FFFFFF" />
            </div>
            <h5 className='text-xs font-medium text-dark-gray2 mt-4'>TOTAL CUSTOMERS</h5>
            <p className='text-2xl font-semibold text-dark-blue mt-4'>123,456</p>
          </div> 
          <div className='flex justify-center'>
            <div className='bg-border-line2 w-10/12 h-[0.3px]'></div>
          </div>
          <div className='flex justify-center'>
            <CustomerButton />
          </div>
        </div>
        <div className='hidden md:flex items-center'>
          <div className='w-[0.3px] h-[100px] bg-border-line2'></div>
        </div>


        <div className='flex flex-col md:w-1/4 border-t-[0.3px] border-b-[0.3px] border-border-line2 pt-3 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
          <div className='px-6'>
            <div className='w-6 h-6 rounded-full bg-dark-gray flex justify-center items-center'>
              <DocumentText size="16" color="#FFFFFF" />
            </div>
            <h5 className='text-xs font-medium text-dark-gray2 mt-4'>TOTAL INVOICES</h5>
            <p className='text-2xl font-semibold text-dark-blue mt-4'>170,032</p>
          </div> 
          <div className='flex justify-center'>
            <div className='bg-border-line2 w-10/12 h-[0.3px]'></div>
          </div>
          <div className='flex justify-center items-center mt-2'>
            <p className='text-xs font-normal text-dark-blue'>Starts from 1 Jan 2023</p>
          </div>
        </div>
        <div className='hidden md:flex items-center'>
          <div className='w-[0.3px] h-[100px] bg-border-line2'></div>
        </div>


        <div className='flex flex-col md:w-1/4 border-t-[0.3px] border-b-[0.3px] border-border-line2 pt-3 hover:bg-active-back hover:shadow hover:shadow-shadow-color hover:rounded-xl'>
          <div className='px-6'>
            <div className='w-6 h-6 rounded-full bg-dark-gray flex justify-center items-center'>
              <DocumentText size="16" color="#FFFFFF" />
            </div>
            <h5 className='text-xs font-medium text-dark-gray2 mt-4'>OVERDUE INVOICES</h5>
            <p className='text-2xl font-semibold text-dark-blue mt-4'>$6,512</p>
          </div> 
          <div className='flex justify-center'>
            <div className='bg-border-line2 w-10/12 h-[0.3px]'></div>
          </div>
          <div className='flex justify-center items-center mt-2'>
            <p className='text-xs font-normal text-dark-blue'>Starts from 1 Jan 2023</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Dashboard
