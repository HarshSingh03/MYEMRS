import React from 'react'
import NavbarOptions from './NavbarOptions'

function Navbar({user}) {
  
  return (
    <nav className='w-[100%]'>
      <div>Logo</div>
      <NavbarOptions user={user}/>
      <div>
        Logged In
      </div>
    </nav>
  )
}

export default Navbar