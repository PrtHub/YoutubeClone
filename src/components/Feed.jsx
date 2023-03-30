import React, {useState, useEffect} from 'react'

import { Stack, Box, Typography } from '@mui/material'
import {SideBar, Videos} from './'
import { fetchApiData } from '../utils/fetchApiData'

const Feed = () => {

  const [selectCategory, setSelectCategory] = useState('New');
  const [videos, setVideos] = useState([]);

   useEffect(() => {
     fetchApiData( `search?part=snippet&q=${selectCategory}`)
     .then((data) => setVideos(data.items))
   }, [selectCategory]);
   

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md:'row'}}} className='text' >
      <Box sx={{ height: {sx: 'auto', md: '100vh'}, borderRight: "1px solid #3d3d3d", px:{sx: 0, md: 2}}}>
       <SideBar
       selectCategory={selectCategory}
       setSelectCategory={setSelectCategory}
       />
       <Typography className='copyright' variant='body2' sx={{ mt: 5, color: '#fff'}}>
         Copyright &copy;Pritam
       </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'scroll', height: '100vh', flex: 1}}>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed