import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.06}} className='relative w-48 h-60 rounded-[30px] bg-zinc-900/90 text-white px-5 py-8 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-sm mt-5 leading-tight'>{data.desc}</p>

      <div className='footer w-full h-10 absolute left-0 bottom-0  mb-8'>

        <div className='flex items-center justify-between px-6 py-2'>
          <h5 className='text-sm'>{data.fileSize}</h5>
          <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
          {data.close ? <IoClose size=".9em"/> : <MdDownload size=".9em" />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag w-full p-2 ${data.tag.tagColor === "blue" ? "bg-sky-500" : "bg-green-500"} flex items-center justify-center`}>
            <h3 className='text-xs px-4'>{data.tag.tagTitle}</h3>
          </div>
        )}

      </div>
    </motion.div>
  )
}

export default Card