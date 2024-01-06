import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex justify-center items-center h-screen my-auto'>
      <div className="text-center">
          <div className="text-center mb-12">
          <h1 className='text-[20rem] text-red-600'>404</h1>
          <p className='text-[2rem]'>Page Not Found</p>
          </div>
        <div className="rounded border-solid border-gray-900 border-2 hover:bg-gray-900 w-[9rem] hover:text-white p-3 mx-auto">
        <Link to='/'>Go Back Home</Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage