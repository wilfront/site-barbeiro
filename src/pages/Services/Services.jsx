import React from 'react'
import './Services.css'
import Infantil from '../../assets/infantil.png'
import Barba from '../../assets/barba.png'
import Corte from '../../assets/tesouracopia.png'

function Services() {
  return (
    <div className='services'>
      <div className="grid-services">
        <div className='corte-infantil'>
          <img src={Infantil} width="30px" alt="infantil" />
          <h1>Corte Infantil</h1>
          <p>A criança tem o seu espaço garantido no
            Barbeiro Shop.Nossos profissionais são
            treinados para melhor atendê-los em um ambiente
            super apropriado, desde bebês de colo.
          </p>
        </div>
        <div className="barba">
          <img src={Barba} width="60px" alt="barba" />
          <h1>Barba</h1>
          <p>A criança tem o seu espaço garantido no
            Barbeiro Shop.Nossos profissionais são
            treinados para melhor atendê-los em um ambiente
            super apropriado, desde bebês de colo.</p>
        </div>
        <div className="corte">
          <img src={Corte} width="60px" alt="corte" />
          <h1>Corte</h1>
          <p>É comum querer mudar o visual de tempos
            em tempos e, quando isso acontece é importante buscar
            boas referências.</p>
        </div>
      </div>


    </div>
  )
}

export default Services
