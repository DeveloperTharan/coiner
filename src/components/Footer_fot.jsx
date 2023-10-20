import React from 'react'
import { Link } from 'react-router-dom'

function Footer_fot() {
  return (
    <div className='bg-blue-900 text-white h-40 mt-10 md:mt-20'>
      <div className="text-center flex flex-col">
        <h1 className='text-2xl mt-8'>Coiner</h1>
        <h1 className='mt-2'>All rights reserved</h1>
        <div className="flex justify-center gap-5 mt-2">
          <Link className='hover:underline underline-offset-4 text-blue-100' to='/'>Home</Link>
          <Link className='hover:underline underline-offset-4 text-blue-100' to='/cryptocurrencies'>Crypto</Link>
          <Link className='hover:underline underline-offset-4 text-blue-100' to='/exchanges'>Exchyanges</Link>
          <Link className='hover:underline underline-offset-4 text-blue-100' to='/news'>News</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer_fot