import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-[3rem]  flex justify-between items-center min-h-screen  pt-25  '>
                {/* HERO CONTENT */}
                <div className='flex-1'>
                    <span className='bg-orange-100 text-orange-500 px-5 py-2 rounded-full text-lg'>Export Best quality...</span>
                    <h1 className='text-7xl font-bold my-5'>Tasty Organic <br /> <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br />In Your City</h1>
                    <p className='text-lg text-zinc-600 mb-[4rem] '>Bred for a high content of beneficial substances. Our products are all <br />fresh and healthy.</p>
                    <Button content="Shop Now" />
                </div>
                {/* HERO IMAGE */}
                <div className='w-[45vw] flex-1 '>
                    <img src={Grocery} alt="Hero Image" />
                </div>
            </div>
        </section>
    )
}

export default Hero