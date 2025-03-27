import React from 'react'
import Button from './Button'

const HeroFotter = () => {
    const buttonArr = [
        {
            bgColor: "#8ED7EE",
            text: "say hii 👋🏻",
            liveLink: "https://www.linkedin.com/in/rohit-mishra-657759298/"
        },
        {
            bgColor: "#EF6A93",
            text: "Download offline resume 📃",
            liveLink: "../name/rohit.pdf"
        },
    ]
    return (
        <div className='flex flex-col md:flex-row items-center justify-center gap-5 mt-3'>
            {buttonArr.map((btn, i) => (
                <Button key={i} text={btn.text} bgColor={btn.bgColor} link={btn.liveLink} />
            ))}
        </div>
    )
}

export default HeroFotter
