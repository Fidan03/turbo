import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/index'
import Home from './pages/HomePage/index'
import CardPage from './pages/CardPage/index'
import Cart from './pages/AddToCart/index'

const App = () => {


  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/card/:id' element={<CardPage/>}/>
            <Route path='/cart' element={<Cart/>}/>                
        </Route>
        </Routes>
    </Router>
  )
}

export default App
