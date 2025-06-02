import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/AJIMG-preview1.png"
import { motion } from "framer-motion"
import resumePDF from "../assets/Anil_Janjal_CV.pdf"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Anil Janjal
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-orange-300 via-white to-green-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer</motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-4"
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
            >
              {/* View Resume Button */}
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 rounded-lg cursor-pointer bg-blue-600 mb-3 px-3 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-slate-950"
              >
                View Resume
              </a>

              {/* Download Resume Button */}
              <a
                href={resumePDF}
                download="AnilJanjal_CV.pdf"
                className="relative z-10 rounded-lg cursor-pointer bg-purple-700 mb-3 px-3 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-slate-950"
              >
                Download Resume
              </a>
            </motion.div>

          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 ">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} alt="Anil Jnajal" className="max-w-[500px] h-auto -mt-17" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
