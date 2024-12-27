import React from 'react'
import './Footer.css'
import Logofooter from '../../assets/logocopia.png'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='logo-local'>
                    <div className="logo-footer">
                        <img src={Logofooter} width="150px" alt="logo" />
                    </div>
                    <div className='localização'>
                        <h2>Endereço: Rua Geagostine Cristovão 404 - Goiânia - GO </h2>
                        <h2>Bairro: Vegas</h2>
                        <h2>Cep: 400020-200</h2>
                    </div>
                </div>
                <nav className='menu-footer'>
                    <h1>Links Úteis</h1>
                    <ul className='list-footer'>
                        <li><NavLink className='nav-footer' to='/'>Home</NavLink></li>
                        <li><NavLink className='nav-footer' to='/About'>Sobre</NavLink></li>
                        <li><NavLink className='nav-footer' to='/Services'>Serviços</NavLink></li>
                        <li><NavLink className='nav-footer' to='/Contact'>Consultar</NavLink></li>
                    </ul>
                </nav>
                <div className="horario">
                    <h1>Funcionamento</h1>
                    <h2>Segunda à Sexta <br />08h00 -19h30</h2>
                    <h2>Sábado <br />08h00-15h30</h2>
                    <h2>Domingo <br /><span>Fechado</span></h2>
                </div>
            </div>
            <div className="projeto">
                <h6>@2024 Barbeiro Shop - Todos os direitos reservados.  @wilfront</h6>
            </div>
        </>
    )
}

export default Footer