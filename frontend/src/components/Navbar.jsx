import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Box, IconButton, Stack } from '@mui/material';
import logo from '../assets/logo1.png';
import {Link, Navigate} from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import avat from '../assets/avatar17.jpg'

function Navbar() {
  const [isopen,setOpen]=useState(false);
  const [show,setshow]=useState(false);

  let onClick = ()=>{
    setOpen(!isopen);
  }
  let display = isopen? 'grid':'hidden'; 
  return (
 <div className="relative fixed top-0 left-0 ">
     <div className='w-full  backdrop-blur-md px-5 relative shadow-md'>
      <nav className='flex items-center justify-between static '> 
            <Box
            sx={{
              width:'110px',
             
            }}
            
            >
              <Link to='/'>
              <img src={logo} alt="logo" className='w-full' onClick={()=>{
                
              }} />
              </Link>
            </Box>
            <div className="">
            <div className=' text-lg'>
              <ul className='text-slate-900 md:flex hidden items-center gap-4 text-black '>
              <li className='hover:border-b-2 hover:border-solid hover:border-gray-900 transition-ease delay-[0.05s]'><Link to='/create'> Create Post </Link></li>
              <li className='hover:border-b-2 hover:border-solid hover:border-gray-900 transition-ease delay-[0.05s]'><Link to='/authors'> Authors </Link></li>
              <li className='hover:border-b-2 hover:border-solid hover:border-gray-900 transition-ease delay-[0.05s]'><Link to='/logout'> Logout </Link></li> 
              <li className='flex items-center gap-3 text-slate-700'><Link to='/profile'> Manuel </Link> <Avatar src={avat}/> </li>
              </ul>
              <div className="md:hidden" onClick={onClick}>
                { isopen? <CloseOutlinedIcon/> : <MenuOutlinedIcon/>}
              </div>
            </div>
            </div>
            
          
      </nav>
    </div>

    {/* mobile view */}
    <div className="relative">

    <div className=' text-lg left-[calc(100vw-10rem)] absolute  block  bg-red-200 '>
              <ul className={`text-slate-900 ${display} z-[10000px] grid-col items-start gap-2  divide-y-2  w-[10rem] text-black py-2  bg-blue-400 `}>
              <li className='  flex items-center gap-7 text-slate-700 pl-2'><Link to='/profile'> Manuel </Link> <Avatar src={avat}/> </li>
              <li className='hover:border-b-2 hover:border-solid hover:border-white pl-2'><Link to='/create'> Create Post </Link></li>
              <li className='hover:border-b-2 hover:border-solid hover:border-white pl-2'><Link to='/authors'> Authors </Link></li>
              <li className='hover:border-b-2 hover:border-solid hover:border-white pl-2'><Link to='/logout'> Logout </Link></li> 
              
              </ul>
            </div>
    </div>


 </div>
  )
}

export default Navbar