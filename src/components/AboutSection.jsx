import React from 'react'


const AboutSection = () => {
    return (
        <div className='my-24'>


            <div className='flex  items-center'>
                <h1 className='text-5xl name font-medium'>About me section</h1>
                <img width={50} src="https://asynchronousjavascriptor.github.io/pflo/images/msgLogo0001.png" alt="" />
            </div>
            <div className='flex justify-center mt-16 '>
                <div className=' w-[650px]  text-center relative md:py-6  pt-6 pb-20 px-5 min-h-[350px] shadow-sm shadow-black/30'>
                    <p className='sign text-xl leading-relaxed tracking-wider'>  Hey there👋🏻 ! I'm Rohit mishra, a frontend web developer with a fresh perspective and a strong foundation in modern web technologies. I have a passion for designing and developing intuitive, dynamic user interfaces. My toolkit includes HTML, CSS, JavaScript, React.js, GSAP, Framer Motion, and Tailwind CSS, all of which allow me to create engaging and responsive websites. As a fresher, I'm constantly learning and experimenting with new ideas to enhance user experience and interface design. Let's build something amazing together!</p>
                    <h1 className='sign absolute uppercase font-thin border-b bottom-8  right-8 -rotate-12 border-black'>rohit mishra</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
