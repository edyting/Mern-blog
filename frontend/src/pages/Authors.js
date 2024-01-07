import React, { useState } from 'react'
import Av1 from '../assets/avatar11.jpg';
import Av2 from '../assets/avatar13.jpg';
import Av3 from '../assets/avatar15.jpg';
import Av4 from '../assets/avatar7.jpg';
import Av5 from '../assets/avatar5.jpg';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const authorData =[
  {id:1,avatar:Av1, name:'manuel',posts:2},
  {id:2,avatar:Av2, name:'manuel',posts:5},
  {id:3,avatar:Av3, name:'manuel',posts:7},
  {id:4,avatar:Av4, name:'manuel',posts:3},
  {id:5,avatar:Av5, name:'manuel',posts:8}
]


function Authors() {
    const [authors,setAuthors]=useState(authorData);
  return (
    <div>
      <section className='px-auto'>
       {authors.length>0? 
        <div className="grid md:grid-cols-3 gap-5 grid-cols-1 ">
            {
              authors.map(({id,avatar,name,posts})=>
                (
                  <Link className='bg-white hover:shadow rounded-lg p-3 gap-2 flex' key={id} to={`/posts/users/${id}`}>
                   <div className="w-[6rem] h-[6rem] border-[0.3rem] border-gray-200 rounded-full">
                    <img src={avatar} className='w-full rounded-full h-full' alt='user profile image'/>
                   </div>
                   <div className="">
                    <h2 className='mt-4 font-bold capitalize text-lg '>{name}</h2>
                    <p className='pt-4 pl-4'>{posts +"  " + 'posts'}</p>
                   </div>
                   </Link> 
                ) 
              )
            }
        </div>: <h2 className='flex text-3xl font-bold justify-center items-center h-[30vh]'>No users/authors found.</h2> }
      </section>
    </div>
  )
}

export default Authors