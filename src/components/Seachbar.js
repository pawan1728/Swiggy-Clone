import React from 'react'
import { searchIcon,voiceIcon } from '../Constant/URLs'

const Seachbar = () => {
  return (
    <div className='flex items-center w-2/3 justify-between'>
        <input type='text' className='p-2 w-full rounded-l-full border outline-none pl-8' />
        <img src={searchIcon} className='rounded-r-full border w-10 h-auto cursor-pointer' alt='searchIcon'/>
        <img src={voiceIcon} className='w-10 h-auto ml-3' alt='VoiceIcon'/>
    </div>
  )
}

export default Seachbar