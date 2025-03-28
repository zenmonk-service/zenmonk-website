import Image from 'next/image'
import "./styles.scss"
import { Box, Typography } from '@mui/material'
import MAP from "./assets/Map.png";
import DESK from "./assets/desk.png";


const ReadyToStartSoftwareDev = () => {

  return (
    <Box className="ready-to-start">
        
        <div>
          <Image src={MAP} alt='map'/>
          </div>

          <div>
          <Image src={DESK} alt='desktop'/>
          </div>
          <Box className="text-box" >
           <Typography className='title'>Are you ready to start ?</Typography>
           <Typography className='description'>Custom Software Development Tailored Solutions for Your Business Custom Software Development Tailored Solutions </Typography>
           <button>Contact us</button>
          </Box>
    </Box>
  )
}

export default ReadyToStartSoftwareDev
