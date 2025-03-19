import React from 'react'
import videoSrc from "../assets/iStock-955627606.webm";

const Herosection = () => {
  return (
    <section className=' relative w-full h-screen flex justify-center items-center text-white text-center overflow-hidden'>
        <div className='absolute inset-0'>
           <video  className='w-full h-full object-cover ' autoPlay loop muted  src={videoSrc}></video>
           </div>
           <div className='relative z-10 max-w-[700px]'>
               <h1 className='text-4xl md:text-6xl font-bold'>Welcome to the Platform</h1>
               <p className='mt-4 text-lg md:text-xl '>Discover amazing services tailored for you</p>
               <button className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg transition duration-300 hover:bg-orange-600">Get Started</button>
           </div>
        
        </section>
  )
}

export default Herosection