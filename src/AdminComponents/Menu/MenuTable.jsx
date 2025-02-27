import { Delete } from '@mui/icons-material'
import CreateIcon from '@mui/icons-material/Create'
import { Avatar, Box, Card, CardActions, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteFoodAction, getMenuItemByRestaurantId } from '../../components/State/Menu/Action'


const MenuTable = () => {
    const dispatch = useDispatch();
    const {restaurant,ingredients,menu} = useSelector(store=>store)
    const jwt = localStorage.getItem("jwt")

    const navigate=useNavigate();

    useEffect(()=>{
        dispatch(
            getMenuItemByRestaurantId({ 
            jwt, 
            restaurantId: restaurant.usersRestaurant.id, 
            vegetarian: false, 
            nonveg:foodType===false, 
            seasonal: foodType===false,
            foodCategory: "", 
        })
    )
    })

    const handleDeleteFood=(foodId)=>{
        dispatch(deleteFoodAction(foodId,jwt))
    }
    
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader action={
                    <IconButton
                    onClick={()=>navigate("/admin/restaurants/add-menu")}
                     aria-label='settings'>
                        <CreateIcon/>

                    </IconButton>
                } title={"Menu"} sx={{ pt: 2, alignItems: "center" }}/>
               
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">title</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Availibility</TableCell>
                                <TableCell align="right">Delete</TableCell>
                                
                               
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menu.menuItems.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                    <Avatar src={item.images[0]}></Avatar>
                                    </TableCell>
                                    <TableCell align="left">{item.name}</TableCell>
                                    <TableCell align="right">
                                        {item.ingredients.map((ingredients)=><Chip label={ingredients.name}/>)}
                                        </TableCell>
                                    <TableCell align="right">₹{item.price}</TableCell>
                                    <TableCell align="right">{item.available?"in_Stock":"Out_of_Stock"}</TableCell>
                                    <TableCell align="right"><IconButton color='primary' onClick={()=>handleDeleteFood(item.id)}><Delete/></IconButton></TableCell>
                                    
                                    
                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Card>

        </Box>
    )
}

export default MenuTable