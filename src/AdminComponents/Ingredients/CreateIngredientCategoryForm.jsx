import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { createIngredientCategory } from '../../components/State/Ingredients/Action';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../components/State/store';

const CreateIngredientCategoryForm = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt")
    const {restaurant} = useSelector(store=> store)
    const [formData,setFormData]= useState({
        name:"",
        
    })
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data ={name:formData.name,restaurantId:restaurant.usersRestaurant.id}
     
        console.log(formData)
        dispatch(createIngredientCategory({data, jwt}))

    };
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setFormData(
            {
                ...formData, [name]:value
            }
        )
    }
  return (
    <div className=''>
        <div className='p-5'>
            <h1 className="text-gray-400 text-center text-x1 pb-18">Create Category</h1>
            <form className='space-y-5' onSubmit={handleSubmit} action="">
            <TextField fullWidth
                id='name'
                name='name'
                label="category"
                variant='outlined'
                onChange={handleInputChange}
                value={formData.name}>

              </TextField>

              <Button variant='contained' type='submit'>
                    Create ingredient Category
              </Button>

            </form>

        </div>

    </div>
  )
}

export default CreateIngredientCategoryForm