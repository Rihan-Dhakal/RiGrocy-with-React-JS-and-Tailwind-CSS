import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-[3rem]  flex md:flex-row flex-col justify-between items-center min-h-screen pt-35 md:pt-25'>
                {/* HERO CONTENT */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-lg'>Export Best quality...</span>
                    <h1 className='md:text-7xl/20 text-5xl/12 font-bold my-5'>Tasty Organic <br /> <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br />In Your City</h1>
                    <p className='md:text-lg text-md text-zinc-600 mb-[3rem] max-w-[540px] '>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
                    <Button content="Shop Now" />
                </div>
                {/* HERO IMAGE */}
                <div className='md:w-[45vw] flex-1 '>
                    <img src={Grocery} alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}

export default Hero