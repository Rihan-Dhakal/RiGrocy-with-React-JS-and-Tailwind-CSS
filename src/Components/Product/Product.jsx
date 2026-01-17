import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList'
import Cards from '../Cards/Cards'
import Button from '../Button/Button'

const Product = () => {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setActiveTab] = useState('All')

    let filterTab = activeTab === 'All'
        ? ProductList : ProductList.filter(product => product.category === activeTab)

    const renderCards = filterTab.slice(0, 8).map(product => {
        return (
            <Cards
                img={product.image}
                name={product.name}
                price={product.price}
                category={product.category}
                id={product.id}
            />
        )

    })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-[3rem] py-[5rem]'>
                <Heading highlight='Our' heading='Product' />

                {/* TABS */}
                <div className='flex justify-center mt-10 gap-3'>
                    {categories.map((category) => {
                        return (
                            <button key={category}
                                className={`cursor-pointer px-5 py-3 text-lg rounded-full cursor-pointer hover:bg-red-300 transition-transform duration-300 hover:scale-105 ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-300'}`}

                                onClick={() => setActiveTab(category)}>
                                {category}</button>
                        )
                    })}
                </div>

                {/* CARDS */}
                <div className='grid grid-cols-4 gap-10 mt-20'>
                    {renderCards}
                </div>

                <div className='mt-15 mx-auto w-fit'>
                    <Button content='View All' />
                </div>

            </div>
        </section>
    )
}

export default Product

