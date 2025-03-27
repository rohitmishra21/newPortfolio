import React from 'react'
import devlopmentImg from '../utils/constant'
const DevlopmentSkills = () => {
    return (
        <div className='my-16  w-fit px-6 md:px-14 py-4 rounded'>
            <h1 className='text-3xl name font-medium'>Development</h1>
            <div className='flex flex-wrap  gap-10 mt-12 items-center'>
                {devlopmentImg.map((img, i) => (
                    <img width={60}
                        height={60} className='object-cover' key={i} src={img.img} alt="" />
                ))}
            </div>
        </div>
    )
}

export default DevlopmentSkills
