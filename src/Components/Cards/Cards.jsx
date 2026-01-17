import React from 'react'
import { FaHeart, FaPlus } from 'react-icons/fa'
import Button from '../Button/Button'

const Cards = ({ img, id, name, price, category }) => {
    return (
        <div key={id} className='bg-zinc-100 p-5 rounded-xl'>
            {/* CARD ICONS */}
            <div className='flex justify-between'>
                <span className='text-3xl text-zinc-300'>
                    <FaHeart />
                </span>
                <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-4 rounded-4xl text-xl text-white transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer '>
                    <FaPlus />
                </button>
            </div>
            {/* CARD IMAGE */}
            <div className='w-full h-50'>
                <img src={img} className='w-full h-full object-contain' />
            </div>
            {/* CARD CONTENT */}
            <div className='text-center'>
                <h3 className='text-2xl font-bold'>{name}</h3>
                <p className='text-lg font-bold mb-2'>${price.toFixed(2)}</p>
                <Button content='Shop Now' />

            </div>

        </div>
    )
}

export default Cards