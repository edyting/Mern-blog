import React, { useState } from 'react'
import {DummyPost} from '../db'
import { Avatar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


function Dashboard() {
  const [posts,setPosts]=useState(DummyPost)
  return (
    <div>
      {
        posts.length > 0 ? <div className="flex flex-col gap-3">
            {
            posts.map(post=>( 
              <article key={post.id} className='p-3 bg-white flex items-center justify-between rounded-lg'>
                <div className="flex items-center gap-3">
                  <div className="img">
                    <Avatar src={post.thumbnail} className='w-[4rem] h-[4rem]'/>
                  </div>
                  <div className="">
                    <Typography variant='h6' className='text-md'>
                      {post.title}
                    </Typography>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                    <Link to={`/posts/${post.id}`}>View</Link>
                    <Link to={`/posts/${post.id}/edit`} className='bg-violet-600 px-2 rounded-md shadow'>
                 Edit
              </Link>
              <Link to={`/posts/${post.id}/delete`} className='bg-red-500 px-2 rounded-md shadow'>
                 Delete
              </Link>
                </div>
              </article>
            ))
            }
        </div>: <h2>You have no posts yet.</h2>
      }
    </div>
  )
}

export default Dashboard