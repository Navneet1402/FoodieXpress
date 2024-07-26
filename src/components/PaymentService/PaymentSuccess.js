import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button, Card } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { green } from '@mui/material/colors';

const PaymentSuccess = () => {
    const navigate=useNavigate();
  return (
    <div className='min-h-screen px-5 border'>
        <div className='flex flex-col items-center justify-center h-[90vh]'>
            <Card className='box w-full lg:w-1/4 flex flex-col items-center rounded-md p-6 '>
                <TaskAltIcon sx={{fontSize:"5rem", color:green[500]}}/>
                <h1 className='py-5 text-2x1 font-semibold'>
                    Order Successful!
                </h1>
                <p className='py-3 text-center text-gray-400'>
                    Your order has been successfully placed. You will receive a confirmation message shortly.
                </p>
                <p>
                    You can view your order details in the order section of your profile
                </p>
                <p className='py-2 text-center text-gray-200 text-lg'>
                    Have a Great Day!
                </p>
                <Button onClick={()=>navigate("/")} variant='contained' className='py-5'sx={{margin:"1rem 0rem"}}>Go to Home</Button>


            </Card>

        </div>

    </div>
  )
}

export default PaymentSuccess