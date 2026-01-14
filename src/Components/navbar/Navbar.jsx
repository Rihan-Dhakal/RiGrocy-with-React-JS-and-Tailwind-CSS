import React, { useEffect } from 'react'
import { useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggle = () => {
        setShowMenu(!showMenu);
    }


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)

        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'shadow-lg' : null}`}>
            <nav className='max-w-[1400px] mx-auto px-[3rem] flex justify-between items-center md:h-[14vh] h-[12vh] '>
                {/* LOGO */}
                <a href="#" className='text-3xl font-semibold'>Ri<span className='text-orange-500'>G</span>rocy</a>
                {/* DESKTOP MENU */}
                <ul className='md:flex gap-x-15  hidden '>
                    <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                    <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'  >Process</a></li>
                    <li><a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'  >About us</a></li>
                    <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'  >Contact us</a></li>
                </ul>

                {/* NAV ACTION */}
                <div className='flex items-center gap-x-5 '>
                    {/* INPUT FIELD */}
                    <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 w-10 h-10 flex justify-center items-center rounded-full text-white text-xl'><IoSearch /></button>
                    </div>
                    <a href="#" className='text-zinc-800 text-2xl'><GoHeartFill /></a>
                    <a href="#" className='text-zinc-800 text-2xl'><HiShoppingBag /></a>

                    {/* HAMBURGER */}
                    <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggle}>{showMenu ? <TbMenu3 /> : <TbMenu2 />}</a>

                </div>

                {/* MOBILE MENU */}
                <ul className={`flex flex-col gap-x-15 gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-3xl items-center md:hidden p-10 absolute top-30 -left-full transfrom -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
                    <li><a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a></li>
                    <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'  >Process</a></li>
                    <li><a href="#" className='font-semibold tracking-wider text-zinc-800  hover:text-orange-500'  >About us</a></li>
                    <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'  >Contact us</a></li>
                    <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
                        <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 w-10 h-10 flex justify-center items-center rounded-full text-white text-xl'><IoSearch /></button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar