import React, { useState } from 'react'
import Heading from '../Heading/Heading'

const Product = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setActiveTab] = useState('All')

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-[3rem] py-[5rem]'>
                <Heading highlight='Our' heading='Product' />

                {/* TABS */}
                <div className='flex justify-center mt-10 gap-3'>
                    {categories.map((category) => {
                        return (
                            <button key={category} className='bg-zinc-300  px-5 py-3 text-lg rounded-full cursor-pointer hover:bg-red-300 transition-transform duration-300 hover:scale-105'>{category}</button>
                        )
                    })}
                </div>


            </div>
        </section>
    )
}

export default Product

