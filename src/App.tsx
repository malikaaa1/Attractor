import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Profile/index'
import Auth from './components/Auth/Auth'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/about" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
