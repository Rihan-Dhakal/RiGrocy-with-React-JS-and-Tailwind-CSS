import React from 'react'
import Banner from '../Banner/Banner'
import products from '../ProductList/ProductList'
import Cards from '../Cards/Cards'

const CategoryPage = ({ title, bgImage, categories = [] }) => {

    const FilteredItems = categories.includes('All')
        ? products
        : products.filter(item => categories.includes(item.category))

    const renderProduct = FilteredItems.map(product => {
        return (
            <Cards img={product.image} name={product.name} price={product.price} />
        )

    })
    return (
        <div>
            <Banner title={title} bgImage={bgImage} />

            <div className='grid  grid-cols-1 md:grid-cols-4 gap-9 py-20 max max-w-[1400px] px-10 mx-auto '>
                {renderProduct}
            </div>
        </div>
    )
}

export default CategoryPage