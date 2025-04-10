import React from 'react'

export default function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='relative max-h-[500px]'>
        {/* Over Photo */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] flex flex-col   justify-center  '>
            <h1 className='px-4 text-4xl sm:text-5xl mg:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-800'>Best</span> </h1>
            <h1 className='px-4 text-4xl sm:text-5xl mg:text-6xl lg:text-7xl font-bold'> <span className='text-orange-800'>Foods</span> Delivered </h1>
        </div>
        <img className='w-full max-h-[500px] object-cover rounded-xl' src="https://c0.wallpaperflare.com/preview/584/469/253/pepperoni-pizza.jpg" alt="Landscape" />
      </div>
    </div>
  )
}
