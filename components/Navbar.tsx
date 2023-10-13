import React from 'react'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-4 px-8 shadow-md shadow-gray-700'>
        <div>
            <img alt='logo' width={120} height={60} src='/logo.png'/>
        </div>
        <div className='lg:flex space-x-12 hidden'>
            <h2 className='text-gray-500 hover:text-gray-400 
            px-2 py-1 rounded-md font-700 transition-all cursor-pointer'>Home</h2>
            <h2 className='text-gray-500 hover:text-gray-400 font-700 transition-all'>History</h2>
            <h2 className='text-gray-500 hover:text-gray-400 font-700 transition-all'>Help</h2>
        </div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Navbar
