import { Button, Grid, TextField } from '@mui/material'
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../components/State/store';
import { createEventAction } from '../../components/State/Restaurant/Action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

};
const initialValues={
  image:"",
  location:"",
  name:'',
  startedAt:null,
  endsAt:null

}

const Events = () => {
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt")
  const {restaurant} = useSelector(store=>store)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues]= React.useState(initialValues)

  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log("submit", formValues)
    dispatch(createEventAction({data:formValues, restaurantId:restaurant.usersRestaurant?.id,jwt}))
    setFormValues(initialValues)

  }
  const handleFormChange =(e)=>{
    setFormValues({...formValues,[e.target.name]:e.target.value})
  }
  const handleDateChange = (date, dateType)=>{
    const formatedDate = dayjs(date).format("MM DD, YYYY hh:mm A");
    setFormValues({...formValues,[dateType]:formatedDate})

  }
  return (
    <div>
      <div className='p-5'>
        <Button onClick={handleOpen} variant='contained'>
          Create New Button

        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                  name='image'
                  label = 'Image URL'
                  variant='outlined'
                  fullWidth
                  value={toHaveFormValues.image}
                  onChange={handleFormChange}
                  />

                 

                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter ={AdapterDayjs}>
                    <DateTimePicker
                    renderInput={(props)=> <TextField{...props}/>}
                    label="Start Date and Time"
                    value={formValues.startedAt}
                    onChange={(newValue)=>
                      handleDateChange(newValue,"startedAt")
                    }
                    inputFormat="MM/dd/yyyy hh:mm a"
                    className="w-full"
                    sx={{width:"100%"}}/>
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter ={AdapterDayjs}>
                    <DateTimePicker
                    renderInput={(props)=> <TextField{...props}/>}
                    label="End Date and Time"
                    value={formValues.endsAt}
                    onChange={(newValue)=>
                      handleDateChange(newValue,"endsAt")
                    }
                    inputFormat="MM/dd/yyyy hh:mm a"
                    className="w-full"
                    sx={{width:"100%"}}/>
                  </LocalizationProvider>
                </Grid>
                
              </Grid>
            </form>
           
          </Box>
        </Modal>
      </div>

    </div>
  )
}

export default Events