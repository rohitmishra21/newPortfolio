import React from 'react'
import { animationSkills } from '../utils/constant'

const AnimtionTools = () => {
    return (
        <div>
            <div className='my-16 bg-[#F6F6F6] w-fit px-8 md:px-14 py-4 rounded'>
                <h1 className='text-3xl name font-medium'>Animation & Tools</h1>
                <div className='flex flex-wrap gap-10 mt-12 items-center'>
                    {animationSkills.map((img, i) => (
                        <img width={50} key={i} src={img.img} alt="" />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AnimtionTools
