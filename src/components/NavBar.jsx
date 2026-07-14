import React from 'react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
        <nav className='flex justify-between items-center bg-blue-500 w-full p-4 px-15'>
            <div>CC23: Midterm</div>
            <div className='flex gap-8'>
                <NavLink to='/todo'>ToDo</NavLink>
                <NavLink to='/'>Login</NavLink>
            </div>
        </nav>
  )
}

export default NavBar