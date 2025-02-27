import React, { useState } from 'react'
import {ProfileNavigation} from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile'
import Address from './Address'
import Favourites from './Favourites'
import Events from './Events'
import Orders from './Orders'


const Profile = () => {
    const [openSideBar, setOpenSideBar]=useState(false)
  return (
    <div className='lg:flex'>
        <div className="sticky h-[80vh] lg:w-[20%]">
            <ProfileNavigation open={openSideBar}/>
        </div>

        <div className="lg:w-[80%]">
        <Routes>
            <Route path='/' element={<UserProfile/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/address' element={<Address/>}/>
            <Route path='/favourites' element={<Favourites/>}></Route>
            <Route path='/events' element={<Events/>}/>
        </Routes>
        </div>
        
        

    </div>
  )
}

export default Profile