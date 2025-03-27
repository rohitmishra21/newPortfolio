import React from 'react'
import { CiHeart } from "react-icons/ci";
const Fotter = () => {
    return (
        <div className=''>
            <h1 className='text-2xl text-center name font-medium'>Let's work together, and create something <br />
                really amazing.</h1>
            <div className='flex justify-center mt-3.5'> <a href='https://www.linkedin.com/in/rohit-mishra-657759298/' className='px-7 py-2 md:text-normal  text-sm  shadow-lg shadow-green-700 text-white bg-green-600 rounded-4xl'>Contact me I am available to work</a></div>
            <div className=' h-[80vh] bg-red-400 mt-10 mx-auto md:xw-[80%]'><img className='w-full h-full object-center object-cover' src="https://asynchronousjavascriptor.github.io/pflo/images/collaborationart.png" alt="" /></div>
            <h1 className='mt-10 text-center flex  items-center justify-center gap-2 text-xs'>created by <span className='text-red-600 '><CiHeart /></span> me</h1>
        </div>
    )
}

export default Fotter
