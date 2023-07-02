import React from 'react'
import { Routes , Route } from 'react-router'
import Signup from '../Componnets/Signup/Signup'
import Login from '../Componnets/Login/Login'
import HomePage from '../Componnets/Home/HomePage'

const MainRoute = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default MainRoute

