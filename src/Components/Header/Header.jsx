import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

function Header() {
  const[menuToggle,setMenuToggle]= useState(false);
  const Toggle=()=>{
    setMenuToggle(!menuToggle)
    console.log(menuToggle)
  }
  const Menutoggle=()=>{
    setMenuToggle(!menuToggle)
  }

  return (
    <header>
      <div className="logo"><img src={Logo} width="85px" height="90px" alt="logo" /></div>
      <div className={menuToggle ? "menu-active" : "menu-inative"} onClick={Menutoggle}>
        <nav className='menu-list'>
          <ul className='list'>
            <li><NavLink className='nav' to='/'>Home</NavLink></li>
            <li><NavLink className='nav' to='/About'>Sobre</NavLink></li>
            <li><NavLink className='nav' to='/Services'>Serviços</NavLink></li>
            <li><NavLink className='nav' to='https://api.whatsapp.com/send?phone=14991954240&text=Ol%C3%A1,%20Seja%20bem%20vindo(a)!'>Consultar</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className={menuToggle ? "active" : "inative"} onClick={Toggle}>
          <button className='hamburguer'></button>
      </div>
    </header>
  )
}
import './Header.css'
import { NavLink } from 'react-router-dom'

export default Header
