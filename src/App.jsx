import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout/index'
import Home from './pages/HomePage/index'
import CardPage from './pages/CardPage/index'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/card/' element={<CardPage/>}/>
        </Route>
        </Routes>
    </Router>
  )
}

export default App
