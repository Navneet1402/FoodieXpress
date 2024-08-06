import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Chip, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantsOrder, updateOrderStatus } from '../../components/State/Restaurant Order/Action';

const orderStatus = [
    { label: "Pending", value: "PENDING" },
    { label: "Completed", value: "COMPLETED" },
    { label: "Out For Delivery", value: "OUT FOR DELIVERY" },
    { label: "Delivered", value: "DELIVERED" },
]
const OrderTable = () => {

    const dispatch = useDispatch();
    const { restaurant, restaurantOrder, ingredients, menu } = useSelector((store) => store)
    const jwt = localStorage.getItem("jwt")

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        dispatch(fetchRestaurantsOrder({
            jwt,
            restaurantId: restaurant.usersRestaurant?.id,
        }))
    }, [])

    const handleUpdateOrder = (orderId, orderStatus) => {
        dispatch(updateOrderStatus({ orderId, orderStatus, jwt }))
        handleClose();
    }

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    title={"All Orders"}
                    sx={{ pt: 2, alignItems: "center" }}

                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Customer</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">name</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">update</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurantOrder.orders.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="right">
                                        <AvatarGroup>

                                            {item.items.map((orderItem) => (<Avatar src={orderItem.food?.images[0]} />))}


                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="right">{item.customer?.fullName}</TableCell>
                                    <TableCell align="right">${item.totalAmount}</TableCell>
                                    <TableCell align="right">
                                        {item.items.map((orderItem) => <p>{orderItem.food?.name}</p>)}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.items.map((orderItem) =>
                                            <div>
                                                {orderItem.ingredients.map((ingredient) => <Chip label={ingredient} />)}
                                            </div>
                                        )}</TableCell>
                                    <TableCell align="right">{item.orderItemStatus}</TableCell>
                                    <TableCell align="right">
                                        <Button
                                            id="demo-positioned-button"
                                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >
                                            update
                                        </Button>
                                        <Menu
                                            id="demo-positioned-menu"
                                            aria-labelledby="demo-positioned-button"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'left',
                                            }}
                                        >
                                            {orderStatus.map((status) =>
                                                 (<MenuItem onClick={() => 
                                                 handleUpdateOrder(item.id,status.value)}>{status.label}</MenuItem>))}

                                        </Menu>
                                    </TableCell>


                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Card>

        </Box>
    )
}

export default OrderTable