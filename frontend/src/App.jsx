import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from './pages/landing'
import Navbar from './components/Navbar'
import SignUp from './pages/register'
import SignIn from './pages/login'
import About from './pages/track'
import Trackyourmeal from './pages/track'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/track" element={<Trackyourmeal/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App