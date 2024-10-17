import React from 'react'
import {data} from '../data/data'

export default function Food() {
  return (
    <div className='max-w-[1640px] m-auto px-4'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      {/* Filter Row */}
      <div className='  '>
        <p className='font-bold text-gray-700 '> Filter Type</p>
        <div className='flex  flex-wrap'>
            <button className='border-orange-600   hover:bg-orange-600 hover:text-white m-1 duration-300'>All</button> 
            <button className='border-orange-600  hover:bg-orange-600 hover:text-white m-1 duration-300'  >Burgers</button> 
            <button className='border-orange-600   hover:bg-orange-600 hover:text-white m-1 duration-300'>Pizza</button> 
            <button className='border-orange-600  hover:bg-orange-600 hover:text-white m-1 duration-300'>Salads</button> 
            <button className='border-orange-600  hover:bg-orange-600 hover:text-white m-1 duration-300'>Chicken</button> 
        </div>
      </div>
      {/* Filter type */}
      <div >
        <p className='font-bold text-gray-700   '>Filter Price</p>
        <div className='flex  max-w-[390px] w-full '>
            <button  className='border-orange-600   hover:bg-orange-600 hover:text-white m-1 duration-300'>$</button>
            <button className='border-orange-600   hover:bg-orange-600 hover:text-white m-1 duration-300'>$$</button>
            <button className='border-orange-600   hover:bg-orange-600 hover:text-white m-1 duration-300'>$$$</button>
            <button className='border-orange-600   hover:bg-orange-600 hover:text-white m-1 duration-300'>$$$$</button>
        </div>
      </div>
      {/* Filter price */}
     <div className='grid grid-cols-2 gap-6 lg:grid-cols-4 pt-4'>
    {data.map((item) => {
        return (
            <div key={item.id} className='border shadow-2xl hover:scale-105  duration-300'> 
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-lg rounded-t-lg' />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'> {item.name}</p>
                    <p className='bg-orange-400 text-white rounded-full p-[0.5px] '> <span>{item.price}</span></p>
                </div>

            </div>
        );
    })}
     </div>
    </div>
  )
}
