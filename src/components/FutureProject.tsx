import React from 'react'

function FutureProject() {
  return (
    <section id='future-projects' className='w-full bg-black h-full flex flex-col justify-center items-center px-10 relative z-20'>
        <div className='flex flex-col justify-center items-center pt-20 w-full'>
            <h2 className='text-[#D7F3F5] text-6xl font-bold'>Future</h2>
            <h2 className='text-[#D7F3F5] text-6xl font-great-vibes'>Projects</h2>
        </div>
        <div className='flex flex-col gap-2 p-20 max-w-8xl'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <img className='rounded-2xl h-[40vh] object-cover w-full' src="images/adidas.webp" alt="shoe website" />
            <img className='rounded-2xl h-[40vh] object-cover w-full' src="images/adidas.webp" alt="3d item webshop" />
            <img className='rounded-2xl h-[40vh] object-cover w-full' src="images/adidas.webp" alt="3d item webshop" />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
            <img className='rounded-2xl h-[40vh] object-cover w-full' src="images/adidas.webp" alt="shoe website" />
            <img className='rounded-2xl h-[40vh] object-cover w-full' src="images/adidas.webp" alt="3d item webshop" />
          </div>
        </div>
    </section>
  )
}

export default FutureProject