import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/footer';
import Homepage from './components/Home/home';

function App() {


  return (
    <>

    <Navigation />

    <Homepage/>

    <Footer/>
     
    </>
  )
}

export default App
