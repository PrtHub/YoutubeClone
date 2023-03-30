import React from 'react'
import { Stack } from '@mui/material';
import {categories} from '../utils/constants'


const SideBar = ({selectCategory, setSelectCategory}) => {

  return (
    <Stack
    direction= 'row'
    sx={{
        overflowY: 'auto',
        height: {sx : 'auto', md: '95%' },
        flexDirection: { md: 'column'}
    }}
    >
        {categories.map((category) => (
         <button
         className='category-btn'
         onClick={() => setSelectCategory(category.name)}
         style={{
            background: category.name === selectCategory && '#272727',
            color: 'white',

         }}
         key={category.name}
         >
            <span style={{ marginRight: '15px'}}>{category.icon}</span>
            <span style={{ opacity: category.name === selectCategory ? '1' : '0.8' }}>{category.name}</span>
         </button>
        ))}

    </Stack>
  )
}

export default SideBar;