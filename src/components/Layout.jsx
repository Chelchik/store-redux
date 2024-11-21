import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Layout() {
  return (
    <div className='root'>
      <Header />

      <Outlet/>

      <Footer />
    </div>
  )
}

export default Layout