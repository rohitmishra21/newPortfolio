import React, { useState } from 'react'
import { motion } from 'framer-motion'
const Project = ({ img, id }) => {
  const [isId, setisId] = useState()
  function clickHendller(e) {
    setisId(e.target.id)
  }
  return (
    <div className=''>
      <div className=' '>
        <div onClick={(e) => { clickHendller(e) }} className='z-30 hover:scale-95 duration-200 transition-all cursor-pointer relative md:h-96 h-64 w-64 md:w-96'>
          <img id={id} src={img.bgImg} className='w-full rounded h-full object-center object-cover' alt="" />
          {id == isId ? <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 0.2 }}
            className='top-0 text-white name font-bold text-xl flex justify-center items-center left-0 absolute w-full h-full bg-black/70'>
            <a href={img.projectLink} className='cursor-pointer px-7 py-1 border border-amber-100 rounded-4xl'>Live</a>
          </motion.div> : null}
        </div>

      </div>
    </div >

  )
}

export default Project
