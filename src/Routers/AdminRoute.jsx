import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurantForm from '../AdminComponents/CreateRestaurantForm'
import Admin from '../AdminComponents/Admin/Admin'
import { useSelector } from 'react-redux'
import { store } from '../components/State/store'

const AdminRoute = () => {
  const {restaurant}=useSelector(store=>store)
  return (
    <div>
        <Routes>
            <Route path="/*" element={!restaurant.usersRestaurant?<CreateRestaurantForm/>:<Admin/>} />
            {/* <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
            <Route path="settings" element={<Settings />} /> */}
        </Routes>
    </div>
  )
}

export default AdminRoute