import React from 'react'
import Project from './Project'

const ProjectContaner = () => {
    const projects = [
        {
            id: 1,
            bgImg: "https://assets.awwwards.com/awards/submissions/2023/11/654c81176231b921367733.jpg",
            projectLink: "http://mann-sales.vercel.app"

        },
        {
            id: 2,
            bgImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_HmYyaU1WPqvlsTm3YirakBHEz6jsvnxqg&s",
            projectLink: "http://nod-coding-bootcamp.vercel.app"
        },
        {
            id: 3,
            bgImg: "https://i.pinimg.com/736x/26/f3/dd/26f3dd7ab2705a4b8b88e3cc43904277.jpg",
            projectLink: "http://you-tube-one.vercel.app"
        },
        {
            id: 4,
            bgImg: "https://assets.awwwards.com/awards/sites_of_the_day/2016/11/awwwards-sotd-ToyFight-1.jpg",
            projectLink: "http://toy-fight-f3cv.vercel.app"
        }
    ];

    return (
        <div className='flex flex-wrap justify-center mt-20 items-center'>
            <div className='flex w-[60vw] flex-wrap gap-4'>
                {projects.map((img) => (
                    <Project key={img.id} img={img} id={img.id} />
                ))}
            </div>
            <div className='w-96 md:my-0 my-36 md:h-[80vh] flex justify-center items-center '>

                <a className='cursor-pointer' href="https://github.com/rohitmishra21"><img src="https://asynchronousjavascriptor.github.io/pflo/images/seemywork.png" alt="" /></a>
            </div>
        </div>
    )
}

export default ProjectContaner
