import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div className='relative'>
        {/* navbar */}
        <div className="relative">
        <Navbar/>
        </div>
        
        {/* outlet */}
        <div className="md:px-20 px-4 bg-gray-200 pt-4 pb-12">
            <Outlet/>
        </div>

        {/* footer */}
        <div className="">
            <Footer/>
        </div>
    </div>
  )
}

export default Layout