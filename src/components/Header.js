import React, { useState } from 'react'
import Seachbar from './Seachbar'
import { humbergerMenu, logo, userIcon } from '../Constant/URLs'
import Sidebar from './Sidebar'
const Header = () => {
  const [istrue, setIsTrue] = useState(false)
  const activeHumbergerMenu = () => {
    setIsTrue(!istrue);
    console.log("istrue", istrue);
  }
  return (
    <div className=''>
      <div className='flex items-center justify-evenly w-full flex-wrap'>
        <div className='flex items-center content-evenly w-2/12 h-2/6 z-50'>
          <img src={humbergerMenu} className='w-10 h-auto cursor-pointer' onClick={activeHumbergerMenu} alt='humberger'/>
          <img src={logo} className='w-32 h-auto' alt='logo'/>
        </div>
        <Seachbar />
        <div className='w-2/12 flex justify-end pr-4'>
          <div className='w-10 h-10 cursor-pointer'>
            <img src={userIcon} className='' alt='user'/>
          </div>
        </div>
      {istrue?<Sidebar/>:null}
      </div>
    </div>

  )
}

export default Header