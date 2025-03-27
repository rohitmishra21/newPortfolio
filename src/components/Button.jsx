import React from 'react'

const Button = ({ bgColor, text, link }) => {
    return (
        <div className=''>
            <button className='px-7 py-2 rounded-4xl text-xl text-white font-medium name capitalize'
                style={{ backgroundColor: bgColor }}>
                <a href={link} download="Resume_Rohit.pdf">{text} </a>
            </button>
        </div>
    )
}

export default Button
