import React from 'react'
import { CgLoadbar } from "react-icons/cg";
import Project from './Project';
import ProjectContaner from './ProjectContaner';
const WorkSection = () => {
    return (
        <div id='abc' className='my-36 name'>
            <h1 className=' flex my-6 items-center gap-2'>
                <div className='w-12 h-0.5 bg-black'></div>
                <span className='font-medium ml-5'>What I do</span>
            </h1>
            <h1 className='text-6xl font-semibold'> Work Samples</h1>
            <ProjectContaner />
        </div>
    )
}

export default WorkSection
