import React from 'react'
import './About.css'
import ImgAbout from '../../assets/barbeiro.jpg'

function About() {
  return (
    <div className='container-about'>
      <div className="about">
        <div className="img-about">
          <img src={ImgAbout} width="350px" height="400px" alt="about" />
        </div>
        <div className="text-about">
          <h1>Sobre</h1>
          <p>A Barbearia Tradicional oferece a seus clientes e amigos uma estrutura de 300m² bem no centro de Florianópolis, na esquina da Av. Rio Branco com a Osmar Cunha. Estamos totalmente voltados para atender o público masculino que preza pelos valores do homem tradicional, executivos, empresários e moradores da região.

            Nossos serviços vão desde os consagrados corte com tesoura e barba com toalha quente e navalha até o cuidado de mãos, pés e pele. Além de massagens terapêuticas e revigorantes, espaço de lazer com adega de vinhos e sinuca. Para melhorar ainda mais a visita temos uma cafeteria especializada e bar com diversas marcas de cervejas artesanais e importadas.

            Estes elementos formam um espaço singular, exclusivo pelos seus diversos ambientes, acessível pela localização e preços, e acima de tudo integro, pela qualidade de atendimento e comprometimento com nossos clientes.

            Convidamos o sr. para conhecer nossa casa, preencha seu cartão fidelidade e aproveite os benefícios de ser do Clube Tradicional.

            Respeitosamente.</p>
        </div>
      </div>
    </div>
  )
}

export default About