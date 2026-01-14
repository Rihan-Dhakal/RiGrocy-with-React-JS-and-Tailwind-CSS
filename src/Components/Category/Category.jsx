import React from 'react'
import Heading from '../Heading/Heading'
import fruitCat from '../../assets/fruits-and-veggies.png'
import dairyCat from '../../assets/dairy-and-eggs.png'
import seafoodCat from '../../assets/meat-and-seafood.png'
import Button from '../Button/Button'

const Category = () => {

    const renderCards = category.map((card) => {
        return (
            // card 
            <div className='flex-1 basis-[300px]'>
                {/* CARD IMAGE */}
                <div className=' w-full min-h-[30vh] relative -mb-10'>
                    <img src={card.img} className='absolute bottom-0' />
                </div>
                {/* CARD CONTENT */}
                <div className='bg-zinc-100 pt-16 p-8 rounded-3xl' >
                    <h3 className='text-zinc-800 text-3xl font-bold text-center'>{card.title}</h3>
                    <p className='text-zinc-500 mt-3 mb-9'>{card.description}</p>
                    <Button content="See All" />
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='py-20 max-w-[1400px] px-[3rem] mx-auto  '>
                <Heading highlight="Shop" heading="by Category" />

                {/* CATEGORY CARDS */}
                <div className='flex flex-wrap gap-10 md:mt-15 mt-5'>
                    {renderCards}
                </div>
            </div>
        </section>
    )
}

export default Category;

const category = [
    {
        id: 'id1',
        title: 'Fruits & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        img: fruitCat
    },
    {
        id: 'id2',
        title: 'Dairy & Eggs',
        description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
        img: dairyCat
    },
    {
        id: 'id3',
        title: 'Meat & SeaFood',
        description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
        img: seafoodCat
    }
]


