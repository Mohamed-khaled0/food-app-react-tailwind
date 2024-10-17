import React from 'react'
import {categories} from '../data/data'

export default function Category() {
  return (
    <div className='max-w-[1640px] flex flex-col items-center justify-center px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center mb-4'>Top Rated Menu Items</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
    {categories.map((item) => {
        return (
            <div key={item.id} className='bg-gray-200 rounded-lg flex justify-between items-center '>
                <h2 className='font-bold sm:text-xl p-2'>{item.name}</h2>
                <img className='w-20' src={item.image} alt={item.name} />
            </div>
        );
    })}
      </div>
    </div>
  )
}
