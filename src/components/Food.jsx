import React, { useState } from 'react'
import {data} from '../data/data'

export default function Food() {
    const [foods , setFoods] = useState(data);
    // Filter by type 
    const filterType = (category) => {
        setFoods(data.filter((item) => {
            return item.category === category;
        }))
    }

    // Filter by price
    const filterPrice = (price) => {
        setFoods(data.filter((item) => {
            return Number(item.price) < price;
        }))
    }
  return (
    <div className='max-w-[1640px] m-auto px-4'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      {/* Filter Row */}
      <div className='  '>
        <p className='font-bold text-gray-700 '> Filter Type</p>
        <div className='flex  flex-wrap'>
            <button onClick={() => setFoods(data)} className='border-orange-600   hover:bg-orange-600 hover:text-white m-1 duration-300'>All</button> 
            <button onClick={() => {filterType('burger')}} className='border-orange-600  hover:bg-orange-600 hover:text-white m-1 duration-300'  >Burgers</button> 
            <button  onClick={() => {filterType('pizza')}}  className='border-orange-600   hover:bg-orange-600 hover:text-white m-1 duration-300'>Pizza</button> 
            <button  onClick={() => {filterType('salad')}}  className='border-orange-600  hover:bg-orange-600 hover:text-white m-1 duration-300'>Salads</button> 
            <button  onClick={() => {filterType('chicken')}}  className='border-orange-600  hover:bg-orange-600 hover:text-white m-1 duration-300'>Chicken</button> 
        </div>
      </div>
      {/* Filter type */}
      <div >
        <p className='font-bold text-gray-700   '>Filter Price</p>
        <div className='flex  w-full '>
    <button onClick={() => filterPrice(50)} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-300'>
      Less than $50
    </button>
    <button onClick={() => filterPrice(100)} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-300'>
      Less than $100
    </button>
    <button onClick={() => filterPrice(200)} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-300'>
      Less than $200
    </button>
    <button onClick={() => filterPrice(300)} className='border-orange-600 hover:bg-orange-600 hover:text-white m-1 duration-300'>
      Less than $300
    </button>
</div>
      </div>
      {/* Filter price */}
     <div className='grid grid-cols-2 gap-6 lg:grid-cols-4 pt-4'>
    {foods.map((item) => {
        return (
            <div key={item.id} className='border shadow-2xl hover:scale-105  duration-300'> 
                <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-lg rounded-t-lg' />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold p-1' > {item.name}</p>
                    <p className='bg-orange-400 text-white rounded-full p-1 '> <span>${item.price}</span></p>
                </div>

            </div>
        );
    })}
     </div>
    </div>
  )
}
