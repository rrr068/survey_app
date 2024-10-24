'use client'

import Header from "@/components/Header"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center justify-between p-24">
          Survey App
        </div>
        <div className="pl-6">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              duration: 2,
              delay: 0.5,
              stiffeness: 600,
            }}
            className='text-black lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem] pt-4'>
              Hello 
          </motion.h2>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              duration: 2,
              delay: 1.0,
              stiffeness: 600,
            }}
            className='text-black lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem] pl-14 pt-4'>
              Survey
          </motion.h2>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              duration: 2,
              delay: 1.5,
              stiffeness: 600,
            }}
            className='text-black lg:text-9xl md:text-8xl font-bold lg:max-w-[40rem] pl-[230px] pt-4'>
              App
          </motion.h2>
        </div>
      </main>
    </>
  )
}
