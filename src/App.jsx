import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './page/Navbar'
import Main from './page/Main'
import Footer from "./page/Footer";
//import DirectorDeskPage from "./page/DirectorDeskPage";


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Footer />
    </>
  )
}

export default App
