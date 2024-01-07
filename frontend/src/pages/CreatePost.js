import { TextField } from '@mui/material'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

function CreatePost() {
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [category,setCategory]=useState('uncategorized');
  const [thumbnail,setThumbnail]=useState('uncategorized');

  const post_categories=[
    "Agriculture","Business","Education","Art","Investment","uncategorized","Weather"
  ];

  const modules ={
    toolbar:[
      [{'header':[1,2,3,4,5,6,false]}],
      ['bold','italic','underline','strike','blockquote'],
      [{'list':'ordered'},{'list':'bullet'},{'indent':'1'},{'indent':'+1'}],
      ['link','image'],
      ['clean']
    ],
  }

  const formats =[
    'header',
    'bold','italic','underline','strike','blockquote',
    'list','bullet','indent',
    'link','image'
    ]

  return (
    <div>
      <section>
        <div className="w-[40rem] mx-auto pt-8">
          <h2 className='text-3xl my-2'>Create Post</h2>
          <p className='bg-red-400 text-white rounded p-2 capitalize mb-4'>
                this is an error message
          </p>
          <form action="">
          <TextField value={title} label={`Title`} onChange={e=>setTitle(e.target.value)} size='small' className='w-full focus:outline-none bg-white'/>
         
         <select  name="category" value={category} onChange={(e)=>setCategory(e.target.value)} className='w-full p-2 my-2 outline-none bg-white'>
            {
              post_categories.map(category=>(
                <option className='outline-none' key={category} value="">{category}</option>
              ))
            }
           
         </select>
         <ReactQuill className='bg-white overflow-scroll h-[8rem]' modules={modules} onChange={setDesc} value={desc} formats={formats}/>
         <input type='file' onChange={e=>setThumbnail(e.target.files[0])} accept='jpg, png, jpeg' className='block my-3'/>
         <button type="submit" className='flex justify-center bg-violet-600 px-3 py-1 rounded-lg hover:bg-gray-900 hover:text-white mx-auto'>Create</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CreatePost