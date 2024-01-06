import React from 'react'
import { Link } from 'react-router-dom'
import {Avatar, Typography} from '@mui/material';
import avatar from '../assets/avatar10.jpg'

function PostAuthor() {
  return (
    <div className=''>
        <Link to={`/posts/users/id`} className='flex gap-5 items-start'>
            <Avatar src={avatar}/>
            <div className="">
                <Typography variant='h6'>
                    By: Manuel
                </Typography>
                <small>
                    Just Now
                </small>
            </div>
        </Link>
    </div>
  )
}

export default PostAuthor