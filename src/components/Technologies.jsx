import {RiReactjsLine} from "react-icons/ri"
import {SiMongodb} from "react-icons/si"
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiReactbootstrap } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { motion} from "framer-motion"

const iconVariants =(duration)=>({
    initial :{t: -10},
    animate:{
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat : Infinity,
            repeatType: "reverse",
        },
    },
})



const Technologies = () => {
  return <div className='border-b border-neutral-800 pb-24'>
    <motion.h1
    whileInView={{opacity: 1, y: 1}}
    initial={{opacity: 0, y: -100}}
    transition={{duration: 1.5}} 
     className='my-20 text-center text-4xl'>Technologies</motion.h1>
       <motion.div
       whileInView={{opacity: 1, x:0}}
       initial={{opacity: 0, x: -100}}
       transition={{duration: 1.5}} 
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
         variants={iconVariants(4.5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNode className="text-7xl text-green-400" />
        </motion.div>
        <motion.div
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiExpress className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
         variants={iconVariants(6.5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiReactbootstrap className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div
         variants={iconVariants(7.5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <TbBrandRedux className="text-7xl text-purple-900" />
        </motion.div>
        <motion.div
         variants={iconVariants(8)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoTailwindCss className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
         variants={iconVariants(5.5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaHtml5 className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div
         variants={iconVariants(6.5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaCss3 className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGithub className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGitAlt className="text-7xl text-orange-950" />
        </motion.div>
       </motion.div>
    </div>
}

export default Technologies
