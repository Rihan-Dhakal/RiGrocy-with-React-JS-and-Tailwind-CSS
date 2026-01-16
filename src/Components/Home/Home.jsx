import React from 'react'
import Navbar from '../navbar/Navbar'
import Hero from '../Hero/Hero'
// import Button from '../Button/Button'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Product from '../Product/Product'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Category />
            <Values />
            <Product />
        </div>
    )
}

export default Home