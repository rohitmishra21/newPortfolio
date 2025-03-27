import React from 'react'
import DevlopmentSkills from './DevlopmentSkills'
import AnimtionTools from './AnimtionTools'

const SkillSection = () => {
    return (
        <div className=''>
            <h1 className=' flex my-6 items-center gap-2'><div className='w-12 h-0.5 bg-black'></div><span className='font-medium ml-5 capitalize'>What I am good at</span></h1>
            <h1 className='text-6xl font-semibold'> Skills and Interests</h1>
            <DevlopmentSkills />
            <AnimtionTools />
        </div>
    )
}

export default SkillSection
