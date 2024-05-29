import React from 'react'
import Button from '@mui/material/Button';
import AppBar from './AppBar.jsx';
import NavBar from './NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Circulars from './Circulars.jsx';
import "./App.css";
import Home from "./home.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './about.jsx';
export default function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/> 
      </Routes>
    <div id="footer" className='text-center'>
      <p>&copy; Gujarat Technological University. All Rights Reserved.</p>
      <p>Last Updated on - 05 Jun 2023</p>
    </div>
    {/* <Circulars/> */}
    </>
  )
}
