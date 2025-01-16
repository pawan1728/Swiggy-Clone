import React from 'react'
import { humbergerMenu, logo } from '../Constant/URLs'

const Sidebar = () => {
  return (
    <div className='w-2/12 h-screen fixed top-0 left-0 z-40 bg-white shadow-lg shadow-slate-500'>
      <div className='flex items-center'>
        <img src={humbergerMenu} className='w-10 h-auto' alt='logo'/>
        <img src={logo} className='w-32 h-auto' alt='logo'/>
      </div>
      <div className=''>
        <div className='border-b p-2 m-2 text-lg'>
        <h2>Home</h2>
        <h2>Shorts</h2>
        <h2>Subscription</h2>
        </div>
        <div className='border-b p-2 m-2 text-lg'>
        <h2>Your Channel</h2>
        <h2>History</h2>
        <h2>Your Videos</h2>
        </div>
        <div className='border-b p-2 m-2 text-lg'>
        <h2>Subscription</h2>
        <h2>trending</h2>
        <h2>Shopping</h2>
        <h2>Live</h2>
        </div>
      
      </div>
    </div>
  )
}

export default Sidebar