import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavouriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout'
import { AddReaction, MusicNoteOutlined } from '@mui/icons-material';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const menu = [

    { title: "Orders", Icon: <ShoppingBagIcon /> },
    { title: "Favourites", Icon: <FavouriteIcon /> },
    { title: "Address", Icon: <AddReaction /> },
    { title: "Payments", Icon: <AccountBalanceWalletIcon /> },
    { title: "Notification", Icon: <NotificationsActiveIcon /> },
    { title: "Events", Icon: <EventIcon /> },
    { title: "Logout", Icon: <LogoutIcon /> }

]
export const ProfileNavigation = ({open, handleClose}) => {
    const isSmallScreen = useMediaQuery('(max-width:1080px)');
    const navigate=useNavigate();
    const handleNavigate=(item)=>{
        navigate(`/my-profile/${item.title.toLowerCase()}`)

    }

    return (
        <div>
            <Drawer
                variant={isSmallScreen ? "temporary" : "permanent"}
                onClose={handleClose}
                open={isSmallScreen ? open : true}
            
                anchor='left'
                sx={{ zIndex: 1, position:"sticky" }}>

                <div className='w-[] lg:w-[20vw] h-[100vh] flex flex-col
                 justify-center text-x1 gap-8 pt-16'>
                    {menu.map((item, i) => <>

                        <div onClick={()=>handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
                            {item.Icon}
                            <span>{item.title}</span>
                        </div>
                        {i !== menu.length - 1 && <Divider />}

                    </>)}
                </div>
            </Drawer>

        </div>
    )
}

