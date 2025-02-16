import { useState } from 'react'
import { RESLOGO } from '../Constant/URLs'
import { Link } from 'react-router-dom'


const ResHeader = () => {
  const [isLogin, SetIsLogin] = useState("Login")

  return (
    <div className=''>
      <div className=' w-full flex flex-wrap border-b my-4 items-center justify-between'>
        <div className=' w-1/12 h-1/6 z-50 '>
          <img src={RESLOGO} className='w-32 h-auto' alt='logo' />
        </div>
        <div className=''>
          <ul className='flex justify-around mr-4'>
            <li className='px-4'>
              <Link to="/">Home</Link></li>
            <li className='px-4'><Link to='/about'>About</Link></li>
            <li className='px-4'><Link to='/service'>Services</Link></li>
            <li className='px-4'><Link to='/contact'>Contact Us</Link></li>
            <button className='bg-gray-100 rounded px-4' onClick={() => isLogin === "Login" ? SetIsLogin("Logout") : SetIsLogin("Login")}>{isLogin}</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResHeader