import React from 'react'

function Navbar() {
  return (
    <nav className=' bg-gray-800 text-white p-4 flex justify-between'>
        <div className="logo cursor-pointer">
            <span className='font-black '>Total Task</span>
        </div>
      <ul className='flex gap-10 justify-end '>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About us</li>
        <li></li>
      </ul>
    </nav>
  )
}

export default Navbar
