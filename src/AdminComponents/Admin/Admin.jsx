import React, { useEffect } from 'react'
import AdminSidebar from './AdminSidebar'
import { Route, Routes } from 'react-router-dom'

import Orders from '../Orders/Orders'
import Menu from '../Menu/Menu'
import Dashboard from '../Dashboard/Dashboard'
import Events from '../Events/Events'
import FoodCategory from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import RestaurantDetails from './RestaurantDetails'
import RestaurantDashboard from '../Dashboard/Dashboard'
import CreateMenuForm from '../Menu/CreateMenuForm'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantCategory, getRestauratById } from '../../components/State/Restaurant/Action'
import { getMenuItemByRestaurantId } from '../../components/State/Menu/Action'
import { fetchRestaurantsOrder } from '../../components/State/Restaurant Order/Action'

const Admin = () => {
  const dispatch = useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {restaurant} = useSelector(store=>store)
  const handleClose=()=>{

  }
  useEffect(()=>{
    dispatch(getRestaurantCategory({jwt, 
      restaurantId : restaurant.usersRestaurant?.id,}));
      dispatch(fetchRestaurantsOrder({
        jwt,
        restaurantId: restaurant.usersRestaurant?.id,
      }))
    
  },[]);
  return (
    <div >
        <div className='lg:flex justify-between'>
            <div>
                <AdminSidebar handleClose={handleClose}/>
            </div>

            <div className='lg-w-[80%]'>
              <Routes>
                <Route path='/' element={<RestaurantDashboard/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/category' element={<FoodCategory/>}/>
                <Route path='/ingredients' element={<Ingredients/>}/>
                <Route path='/event' element={<Events/>}/>
                <Route path='/details' element={<RestaurantDetails/>}/>
                <Route path='/add-menu' element={<CreateMenuForm/>}/>
              </Routes>
                

            </div>


        </div>

    </div>
  )
}

export default Admin