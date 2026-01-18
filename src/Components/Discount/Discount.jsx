import React from 'react'
import Button from '../Button/Button'
import freshFruits from '../../assets/fresh-fruits.png'

const Discount = () => {
    return (
        <section className='bg-zinc-100 bg-right bg-no-repeat bg-contain' style={{ backgroundImage: `url(${freshFruits})` }}>
            <div className=' md:bg-transparent bg-zinc-100 max-w-[1400px] mx-auto px-[3rem] py-[5rem] flex md:flex-row flex-col'>
                <span className='md:text-9xl text-7xl text-orange-500 font-bold transform md:-rotate-90 md:self-center '>20%</span>
                <div className='max-w-[700px]'>
                    <h3 className='md:text-7xl text-4xl font-bold  text-zinc-800 mt-2'>First Order Discount!</h3>
                    <p className='mb-3 mt-2'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.

                    </p>
                    <Button content='Get a Discount' />
                </div>

            </div>
        </section>
    )
}

export default Discount