import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {
  const [userData,setUserData]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const changer =(e)=>{
    setUserData( prev =>{
      return {...prev,[e.target.name]: e.target.value}
    })
  };

  return (
    <div>
      <section className='flex justify-center'>
        <div className="">
          <h2 className='text-4xl font-bold mb-2'>Sign Up</h2>
          <form className='w-[40rem]' >
              <p className='bg-red-400 text-white rounded p-2 capitalize mb-4'>
                this is an error message
              </p>
              <TextField label='Name' name='name' sx={{
                width:'100%',
                marginBottom:'15px'
              }} size='small' value={userData.name} onChange={changer}/>
                <TextField label='Email' name='email' sx={{
                width:'100%',
                marginBottom:'15px'
              }} size='small' value={userData.name} onChange={changer}/>
                <TextField label='Password' name='password' sx={{
                width:'100%',
                marginBottom:'15px'
              }} size='small' value={userData.name} onChange={changer}/>
                <TextField label='confirmPassword' name='confirm password' sx={{
                width:'100%',
                marginBottom:'15px',
                bgcolor:'white',
                border:'none'
              }} size='small' value={userData.name} onChange={changer}/>

             <input type="submit" value="Register" className='p-1 px-2 bg-violet-700 text-white hover:bg-gray-400 hover:text-gray-900 rounded-lg font-semibold ' />
          </form>
          <small className='mt-2 block'>Already have an account? <Link className='text-blue-800 ' to='/login'>Login</Link> </small>
        </div>
      </section>
    </div>
  )
}

export default Register