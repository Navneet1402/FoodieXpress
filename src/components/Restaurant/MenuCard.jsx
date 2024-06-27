import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MenuCard = () => {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className='lg:flex items-center'>
                <img className="w-[7rem] h-[7rem] object-cover" src="https://cdn.pixabay.com/photo/2024/04/18/10/41/ai-generated-8704060_640.jpg"
                 alt=""/>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard