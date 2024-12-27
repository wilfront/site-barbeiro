import React from 'react'
import './Home.css'
import Services from '../Services/Services'
import About from '../About/About'
import Footer from '../../Components/Footer/Footer'

function Home() {
  return (
    <>
      <div className='home'>
        <div className="text-home">
          <h1>Barba Feita</h1>
          <h1>todo mundo respeita !</h1>
          <p className='typing'>---  Barbeiro Shop  ---</p>
          <nav className='btn-agendar'>
            <a href="https://api.whatsapp.com/send?phone=14991954240&text=Ol%C3%A1,%20Seja%20bem%20vindo(a)!">
              <button className='agendar'>Agende já !</button>
            </a>
          </nav>
        </div>
      </div>
      <About />
      <Services />
      <Footer />
    </>
  )
}

export default Home