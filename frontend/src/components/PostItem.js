import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from './PostAuthor';


function PostItem({post}) {
  return (
    <div>
        <div className="">
            <article className='bg-white p-1 rounded hover:shadow'>
                <div className="">
                    <img src={post.thumbnail} alt={post.title} className='rounded overflow-hidden h-[16rem]' />
                </div>
                <div className="mt-[1.5rem]">
                   <div className="my-12">
                   <Link to={`/posts/${post.id}`}>
                    {post.title}
                    </Link>
                   </div>
                    <p>
                        {post.desc}
                    </p>
                    <div className="flex justify-between items-end mt-12">
                        <PostAuthor/>
                        <Link to={`/posts/categories/${post.category}`} className='bg-[#f9f9f9] text-gray-900 rounded py-1 px-3 shadow'>
                            {post.category}
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    </div>
  )
}

export default PostItem