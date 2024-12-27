import React from "react"
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div className="nav-header">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
