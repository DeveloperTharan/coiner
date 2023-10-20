import React from 'react'
import { Link } from 'react-router-dom'

function NavButton({items}) {
  return (
    <div className='mb-6 lg:mb-0 lg:mt-[4.3px] text-center '>
      <Link to={items.to}>
          <div className='text-gray-600 font-semibold text-[12px] md:ml-8 hover:text-blue-600 '>{items.name}</div>  
      </Link>
    </div>
  )
}

export default NavButton