import React from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <header className='bg-white fixed top-0 left-0 right-0 '>
            <nav className='max-w-[1400px] mx-auto px-[3rem] flex justify-between items-center h-[14vh] '>
                {/* LOGO */}
                <a href="#" className='text-3xl font-semibold'>Ri<span className='text-orange-500'>G</span>rocy</a>
                {/* DESKTOP MENU */}
                <ul className='flex gap-x-15   '>
                    <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                    <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'  >Process</a></li>
                    <li><a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'  >About us</a></li>
                    <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'  >Contact us</a></li>
                </ul>

                {/* NAV ACTION */}
                <div className='flex items-center gap-x-5 '>
                    {/* INPUT FIELD */}
                    <div className='flex p-1 border-2 border-orange-500 rounded-full'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 w-10 h-10 flex justify-center items-center rounded-full text-white text-xl'><IoSearch /></button>
                    </div>
                    <a href="#" className='text-zinc-800 text-2xl'><GoHeartFill /></a>
                    <a href="#" className='text-zinc-800 text-2xl'><HiShoppingBag /></a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar