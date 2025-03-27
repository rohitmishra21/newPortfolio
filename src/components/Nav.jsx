import React from 'react'

const Nav = () => {
    return (
        <div className='text-lg md:mb-32 mb-16 name flex justify-between'>
            <div className='flex items-center justify-between md:w-fit w-full md:justify-items-start gap-3'>
                <h1><span className='font-semibold'>Rohit</span> <span>Mishra</span></h1>
                <button className='bg-[#8ED7EE] px-6 py-0.5 button text-white '>portfolio</button>
            </div>
            <div className='md:block hidden'>
                <ul className='flex font-medium items-center gap-7'>
                    <li className='text-[#8ED7EE] cursor-pointer'>Home</li>
                    <li className='text-black/30 hover:text-[#8ED7EE]  transition-all duration-300 cursor-pointer '>Work Sample</li>
                    <li className='text-black/30 hover:text-[#8ED7EE]  transition-all duration-300 cursor-pointer '>  <a href="../name/rohit.pdf" download="Resume_Rohit.pdf">Download resume</a></li>
                    <div className='flex items-center '>
                        <img width={30} src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                        <li><a href="https://github.com/rohitmishra21">GitHub</a></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Nav
