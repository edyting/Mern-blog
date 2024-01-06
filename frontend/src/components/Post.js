import React, { useState } from 'react';
import img1 from '../assets/blog1.jpg';
import img2 from '../assets/blog21.jpg';
import img3 from '../assets/blog100.jpg';
import img4 from '../assets/blog101.jpg';
import img5 from '../assets/blog18.jpg'
import PostItem from './PostItem';

const DummyPost=[
  {
    id:1,
    thumbnail:img1,
    category:'education',
    title:'First blog post title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi repellendus ab laboriosam sapiente quod pariatur, sit reprehenderit saepe! Aperiam laboriosam perspiciatis maxime, necessitatibus quam consequatur odit? Voluptates, sint, hic a, doloribus impedit corrupti sed laborum quos eius quasi expedita.',
    authorID:2

  },
  {
    id:2,
    thumbnail:img2,
    category:'agriculture',
    title:'First blog post title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi repellendus ab laboriosam sapiente quod pariatur, sit reprehenderit saepe! Aperiam laboriosam perspiciatis maxime, necessitatibus quam consequatur odit? Voluptates, sint, hic a, doloribus impedit corrupti sed laborum quos eius quasi expedita.',
    authorID:1

  },
  {
    id:3,
    thumbnail:img3,
    category:'entertainment',
    title:'First blog post title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi repellendus ab laboriosam sapiente quod pariatur, sit reprehenderit saepe! Aperiam laboriosam perspiciatis maxime, necessitatibus quam consequatur odit? Voluptates, sint, hic a, doloribus impedit corrupti sed laborum quos eius quasi expedita.',
    authorID:3

  },
  {
    id:4,
    thumbnail:img4,
    category:'art',
    title:'First blog post title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi repellendus ab laboriosam sapiente quod pariatur, sit reprehenderit saepe! Aperiam laboriosam perspiciatis maxime, necessitatibus quam consequatur odit? Voluptates, sint, hic a, doloribus impedit corrupti sed laborum quos eius quasi expedita.',
    authorID:4

  },
  {
    id:5,
    thumbnail:img5,
    category:'business',
    title:'First blog post title',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat commodi repellendus ab laboriosam sapiente quod pariatur, sit reprehenderit saepe! Aperiam laboriosam perspiciatis maxime, necessitatibus quam consequatur odit? Voluptates, sint, hic a, doloribus impedit corrupti sed laborum quos eius quasi expedita.',
    authorID:5

  }
];


function Post() {
  const [posts,setPost]= useState(DummyPost)
  return (
    <div>
      <section>
       <div className="grid md:grid-cols-3 grid-cols-1 gap-[26px]">
       {posts.map((post)=>(
          <PostItem post={post} key={post.id}/>
        ))}
       </div>
      </section>
    </div>
  )
}

export default Post