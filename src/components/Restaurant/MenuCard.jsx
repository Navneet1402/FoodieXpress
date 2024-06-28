import { Accordion, AccordionSummary, AccordionDetails, Typography, FormGroup, FormControlLabel, Button } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';



const demo = [
  {
    category: "Nuts and Seeds",
    ingredients: ["Cashews"]
  },

  {
    category: "Bread",
    ingredients: ["Hamburger buns","Normal Buns"],
    
  },

]

const MenuCard = () => {
  const handleCheckBoxChange=(value)=>{
    console.log("value")

  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className='lg:flex items-center lg:gap-5'>
            <img className="w-[7rem] h-[7rem] object-cover" src="https://cdn.pixabay.com/photo/2024/04/18/10/41/ai-generated-8704060_640.jpg"
              alt="" />

            <div className='space-y-1 lg:space-y-5 lg:max-w-2x'>
              <p className='font-semibold text-x1'>Burger</p>
              <p>₹79</p>
              <p className='text-gray-400'>nice food</p>

            </div>
          </div>

        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className='flex gap-5 flex-wrap'>
            {
              demo.map((item)=>
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  {item.ingredients.map((item)=> 
                  <FormControlLabel control={<Checkbox onChange={()=> handleCheckBoxChange(item)}/>} label={item}/>)}
                  
                </FormGroup>
              </div>
              )
            }
          </div>
          <div className='pt-5'>
            <Button variant='contained' disabled={false} type='submit'>{true?"Add to Cart":"Out of Stock"}</Button>
          </div>
        </form>
  </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard