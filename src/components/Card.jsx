import React from 'react'

const Card = ({ heading, text, textColor }) => {
    return (
        <div className='h-60 w-80 flex hover:scale-95 duration-150 transition-all shadow-xl rounded shadow-black/20 flex-col gap-2 justify-center items-center'>
            <h1 className='capitalize text-xl' style={{ color: textColor }}>{heading}</h1>
            <h1 className='text-sm name font-extralight text-gray-500 w-42 text-center '>{text}</h1>
        </div>
    )
}

export default Card
