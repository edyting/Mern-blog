import { Avatar, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/avatar6.jpg';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function UserProfile() {

  const [avat,setAvatar] =useState(img);
  const [fname,setFname] =useState('');
  const [email,setEmail] =useState('');
  const [currentpassword,setCurrentPassword] =useState('');
  const [newpassword,setNewPassword] =useState();
  const [confirmnewpassword,setConfirmNewPassword] =useState();

  return (
    <div className='flex flex-col justify-center w-[40rem] mx-auto' >
      <div className="flex flex-col items-center pt-8">
        <Link to={`/myposts/sdf`} className='bg-white px-3 py-1 hover:bg-gray-900 hover:text-white rounded-lg mb-4'>
          My Posts
        </Link>
        <div className="text-center">
          {/* wrapper */}
          <div className="flex  flex-col items-center relative">
            <Avatar src={avat} sx={{
              width:'160px',height:'160px',border:'4px solid white',marginBottom:'20px'
            }}/>
            {/* form */}
            <form >
              <input id='avatar' className='hidden' type="file" name='avatar' accept='png, jpg, jpeg' onChange={(e)=>setAvatar(e.target.files[0])} />
              <label htmlFor="avatar" className='absolute -right-2 bottom-8 hidden'>
                <CreditScoreIcon fontSize='large'/>
              </label>
            </form>
            {/* wrapper end */}
            <button className='absolute bottom-8 -right-2'>
              <CheckCircleIcon fontSize='large' className='text-violet-500'/>
            </button>
          </div>
        </div>
        <h1 className='text-2xl font-bold -mt-2'>Manuel Joe</h1>
      </div>
      {/* edit form */}
          <div className="flex flex-col justify-center  mx-auto">
            <form className='flex flex-col items-center w-[35rem]'>
            <p className='bg-red-400 text-white w-full rounded p-2 capitalize text-center mb-4'>
                this is an error message
              </p>
              <TextField size='small' className='my-3 w-full bg-white' label={`Full Name`} onChange={e=>setFname(e.target.value)}/>
              <TextField size='small'  className='my-3 w-full bg-white'  label={`Email`} onChange={e=>setEmail(e.target.value)} />
              <TextField size='small'  className='my-3 w-full bg-white'  label={`Current Password`} onChange={e=>setCurrentPassword(e.target.value)} />
              <TextField size='small'  className='my-3 w-full bg-white'  label={`New Password`} onChange={e=>setNewPassword(e.target.value)} />
              <TextField size='small'  className='my-3 w-full bg-white'  label={`Confirm New Password`} onChange={e=>setConfirmNewPassword(e.target.value)} />
              <button type='submit' className='bg-violet-600  py-2 px-3 text-center hover:bg-gray-900 hover:text-white rounded-lg'>Update Details</button>
            </form>
          </div>
    </div>
  )
}

export default UserProfile