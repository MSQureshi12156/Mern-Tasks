import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Service from './Service'
import Home from './Home'
import Contact from './Contact'
import Register from './Register'

export default function NavbarRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  )
}
