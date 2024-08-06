import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createIngredient, createIngredientCategory } from '../../components/State/Ingredients/Action';
import { store } from '../../components/State/store';

const CreateIngredientForm = () => {
    const {restaurant,ingredients}= useSelector(store=>store)
    const dispatch=useDispatch();
    const jwt = localStorage.getItem("jwt")
    const [formData, setFormData] = useState({
        name: "",
        categoryId: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            ...formData,
            restaurantId: restaurant.usersRestaurant.id
        };

        dispatch(createIngredient({data,jwt}))
        // const data ={...formData,restaurantId:restaurant.usersRestaurant.id}
        console.log(data)
       

    };
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(
            {
                ...formData, [name]: value
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
                        label="Name"
                        variant='outlined'
                        onChange={handleInputChange}
                        value={formData.categoryName}>

                    </TextField>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.ingredientCategoryId}
                            label="Category"
                            onChange={handleInputChange}
                            name='categoryId'
                        >
                           {ingredients.category.map( <MenuItem value={item.id}>{item.name}</MenuItem>)}
                            
                        </Select>
                    </FormControl>

                    <Button variant='contained' type='submit'>
                        Create Ingredient
                    </Button>

                </form>

            </div>

        </div>
    )
}

export default CreateIngredientForm