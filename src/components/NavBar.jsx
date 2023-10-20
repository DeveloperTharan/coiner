import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg' 
import { FaTimes } from 'react-icons/fa'
import { CiMenuBurger } from 'react-icons/ci'
import NavButton from './NavButton'

const NavBar = () => {

    let Links =[
        {
            id: 1, 
            name: "Home", 
            to: "/", 
        },
        {
            id: 2, 
            name: "Cryptocurrencies", 
            to: "/cryptocurrencies",
        },
        {
            id:3, 
            name:"Exchanges", 
            to:"/exchanges",
        },
        {
            id:4, 
            name:"NFT", 
            to:"/nfts",
        },
        {
            id:5, 
            name:"News", 
            to:"/news",
        },
      ];

      let [open,setOpen]=useState(false);

  return (
    <div className='w-full border border-x-0 border-gray-200'>
        <div className='container md:mx-auto md:flex items-center justify-between bg-white py-2 md:px-10 px-7'>
            <Link to='/'>
                <div className='flex'>
                    <img src={logo} alt="" className='w-12' />
                    <span className='text-[16px] font-semibold text-gray-900 mt-2'>Coiner</span>
                </div>
            </Link>
        
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-[70px] cursor-pointer lg:hidden'>
                <CiMenuBurger name={open ? 'close':'menu'} className={open ? 'hidden':'block'} ></CiMenuBurger>
            </div>
            <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-8 top-[70px] cursor-pointer lg:hidden text-gray-600'>
                <FaTimes name={open ? 'close':'menu'} className={open ? 'block':'hidden'} ></FaTimes>
            </div>

            <div className={`lg:flex absolute lg:static bg-white lg:z-auto z-[1] left-0 w-full lg:w-auto 
                lg:pb-0 pb-5 transition-all duration-500 ease-in ${open ? 'xs:top-38 md:top-[110px] ':'top-[-490px]'}`}>
                {Links.map((link)=>(
                    <div key={link.id}>
                        <NavButton 
                            items={link}
                        />
                    </div>
                ))}  
            </div>
        </div>
    </div>
  )
}

export default NavBar