import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"


function Card({ data, reference }) {
     return (
          <motion.div drag dragConstraints={reference} whileDrag={{scale: 0.8}} dragElastic={.1} dragTransition={{bounceStiffness: 600, bounceDamping: 30}} className='relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
               <FaFileAlt />
               <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
               <div className="footer absolute bottom-0 w-full left-0">
                    <div className='flex items-center justify-between px-6 py-3 mb-5'>
                         <h5>{data.fileSize}</h5>
                         <span className='w-7 h-7 bg-zinc-00 rounded-full flex items-center justify-center'>
                              {data.close ? <IoMdCloseCircle /> : <FaCloudDownloadAlt size=".8em" color="#fff" />}
                         </span>
                    </div>
                    
                         {data.tag.isOpen && (
                              <div className={`tag w-full py-5 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                              <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3> 
                              </div>
                         )}
                    
                   
                   
               </div>
          </motion.div>



     )
}

export default Card
