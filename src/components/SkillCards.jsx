import React from 'react'
import Card from './Card'

const SkillCards = () => {
    return (
        <div className='flex flex-wrap justify-center gap-3.5'>
            <Card heading={"frontend Development"} text={"HTML, CSS, JavaScript, React.js, Tailwind CSS"} textColor={"#73CFEC"} />
            <Card heading={"MERN Stack Development"} text={"MongoDB, Express, React.js, Node.js"} textColor={"#7EC89E"} />
            <Card heading={"Animations & Interactions"} text={"GSAP, Framer Motion, CSS Animations"} textColor={"#EF6A93"} />
        </div>
    )
}

export default SkillCards
