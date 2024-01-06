import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout() {
  return (
    <div className='relative'>
        {/* navbar */}
        <div className="">
        <Navbar/>
        </div>
        
        {/* outlet */}
        <div className="">
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