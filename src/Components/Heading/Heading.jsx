import React from 'react'

const Heading = (props) => {
    return (
        <div className='mx-auto w-fit'>
            <h2 className=' text-zinc-800 md:text-5xl text-[2.5rem] font-bold'><span className='text-orange-400'>{props.highlight}</span> {props.heading}</h2>
            <div className='w-35 h-1 bg-orange-300 ml-auto md:mt-6 mt-3 '></div>
        </div>
    )
}

export default Heading