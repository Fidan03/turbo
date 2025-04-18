import './layout.module.css'

import React from 'react'
import Header from '../../layout/Header'
import Info from '../../layout/Info'
import { Outlet } from 'react-router'


const Layout = () => {


  return (
    <>
    <Info/>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout