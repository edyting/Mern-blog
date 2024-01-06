import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-gray-900 mt-12 pt-12'>
      <ul className='flex md:flex-rows flex-wrap items-center justify-center gap-4 mb-12 '>
        <li className='bg-gray-700 px-5 text-white p-2 rounded hover:bg-white hover:text-gray-900'>
          <Link to="/posts/categories/agriculture">Agriculture</Link>
        </li>
        <li className='bg-gray-700 px-5 text-white p-2 rounded hover:bg-white hover:text-gray-900'>
          <Link to="/posts/categories/business">Business</Link>
        </li>
        <li className='bg-gray-700 px-5 text-white p-2 rounded hover:bg-white hover:text-gray-900'>
          <Link to="/posts/categories/education">Education</Link>
        </li>
        <li className='bg-gray-700 px-5 text-white p-2 rounded hover:bg-white hover:text-gray-900'>
          <Link to="/posts/categories/Entertainment">Entertainment</Link>
        </li>
        <li className='bg-gray-700 px-5 text-white p-2 rounded hover:bg-white hover:text-gray-900'>
          <Link to="/posts/categories/art">Art</Link>
        </li>
        <li className='bg-gray-700 text-white p-2 rounded hover:bg-white hover:text-gray-900'>
          <Link to="/posts/categories/investment">Investment</Link>
        </li>
        <li className='bg-gray-700 px-5 text-white p-2 rounded hover:bg-white hover:text-gray-900'> 
          <Link to="/posts/categories/uncategorized">Uncategorized</Link>
        </li>
        <li className='bg-gray-700 px-5 text-white p-2 rounded hover:bg-white hover:text-gray-900'>
          <Link to="/posts/categories/weather">Weather</Link>
        </li>
      </ul>
      <div className="text-center border-t border-white border-solid font-bold text-white py-4">
        <small className='capitalize'>All rights reserved &copy; copyright, quasorFordge tecnologies</small>
      </div>
    </footer>
  )
}

export default Footer