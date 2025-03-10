import React from 'react'
import NavbarOptions from './NavbarOptions'

function Navbar({ user, setContent }) {

  return (
    <nav className='w-[100%] flex flex-direction-row items-center bg-blue-500 text-white p-4'>
      <div className='flex-1 flex flex-direction-row items-center gap-10'>
        <div >Logo</div>
        <NavbarOptions setContent={setContent} user={user} />
      </div>
      <div className='flex-1 text-right'>
        Logged In
      </div>
    </nav>
  )
}

export default Navbar