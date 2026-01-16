import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
    const leftValue = value.slice(0, 2).map(left => {
        return (

            <div key={left.id} className='flex md:flex-row-reverse items-center'>
                <div>
                    <span className='bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 flex rounded-full justify-center items-center text-3xl text-white'>{left.icon}</span>
                </div>

                <div className='md:text-right mx-5'>
                    <h3 className='text-3xl font-bold text-zinc-800'>{left.title}</h3>
                    <p className='text-zinc-600 mt-2'>{left.para}</p>
                </div>
            </div>

        )
    })

    const rightValue = value.slice(2, 4).map(right => {
        return (

            <div key={right.id} className='flex items-center'>
                <div>
                    <span className='bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 flex rounded-full justify-center items-center text-3xl text-white'>{right.icon}</span>
                </div>

                <div className=' mx-5'>
                    <h3 className='text-3xl font-bold text-zinc-800'>{right.title}</h3>
                    <p className='text-zinc-600 mt-2'>{right.para}</p>
                </div>
            </div>

        )
    })




    return (
        <section>
            <div className='max-w-[1400px] px-[3rem] mx-auto py-20  '>
                <Heading highlight='Our' heading='Values' />
                <div className='flex md:flex-row flex-col gap-15 md:gap-5'>
                    {/* LEFT VALUES */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between' >
                        {leftValue}
                    </div>
                    {/* IMG */}
                    <div className='md:flex w-1/2 hidden'>
                        <img src={basket} />
                    </div>
                    {/* RIGHT VALUES */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between '>
                        {rightValue}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />

    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt />
    },
    {
        id: 4,
        title: '100% Organic',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling />
    }


]