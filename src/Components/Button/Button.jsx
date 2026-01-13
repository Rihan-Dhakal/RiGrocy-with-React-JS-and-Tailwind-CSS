import React from 'react'

const Button = ({ content }) => {
    return (

        <button className='bg-gradient-to-b from-orange-500 to-orange-600 px-7 py-3 text-white rounded-xl text-lg hover:scale-105 transition-all duration-300 hover:to-orange-700 cursor-pointer'>{content}</button>

    )
}

export default Button