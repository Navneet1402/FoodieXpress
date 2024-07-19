import React from 'react'
import RestaurantCard from '../Restaurant/RestaurantCard'
import { useSelector } from 'react-redux'
import { store } from '../State/store'

const Favourites = () => {
  const {auth}=useSelector(store=>store)
  return (
    <div>
      <h1 className='py-5 text-x1 font-semibold text-center'>
        My Favourites
      </h1>

      <div className='flex flex-wrap gap-3 justify-center'>
        {
          auth.favourites.map((item)=><RestaurantCard item={item}/>)
        }

      </div>
    </div>
  )
}

export default Favourites