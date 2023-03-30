import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import icon from '../assets/youtube.png'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{ position:"sticky", background:'#0f0f0f', top:"0", justifyContent:"space-between"}}
    >
        <Link to='/' style={{ display:'flex', alignItems:'center'}}>
          <img src={icon} alt="Logo" height={37} />
          <Typography className='header' sx={{ color: '#fff', fontSize: '23px', marginLeft: '4px', fontWeight: '500'}}>YouTube</Typography>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar