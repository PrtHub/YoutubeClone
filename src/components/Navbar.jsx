import React from 'react'
import { Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
// import { logo } from '../utils/constants'
import index from '../assets/index'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack direction='row' alignItems='center' p={2} sx={{ position:"sticky", background:'#000', top:"0", justifyContent:"space-between"}}
    >
        <Link to='/' style={{ display:'flex', alignItems:'center'}}>
          <img src={index.logo} alt="Logo" height={45} />
          <Typography sx={{ color: '#fff', fontSize: '20px', marginLeft: '4px', fontWeight: '500'}}>YouTube</Typography>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar