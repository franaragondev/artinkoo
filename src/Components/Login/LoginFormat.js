import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import { Link } from 'react-router-dom'

//Componente que renderizará el video de la primera carga
const LoginFormat = (props) => {
    return (
        <div className='loginFormat'>
            <p className='mensajeLogin'>INICIAR SESIÓN</p>
            <form action='https://artinkoo.herokuapp.com/login' method='POST'>
                <input className='inputLogin' type='text' placeholder='Usuario' name='usuario' />
                <input className='inputLogin' type='password' placeholder='Contraseña' name='contrasenia' />
                <button className='btnLogin' type='submit'>Iniciar Sesión</button>
            </form>
            <p id='registrateLink'>Regístrate <Link to='/register' className='link'>aquí</Link></p>
            <div className='flecha'>
                {/* <picture>
                    <img id='flecha' alt='flecha' src='../images/flecha.svg'></img>
                </picture> */}
                <Link className='link' to='/home'>
                    Volver a Inicio
            </Link>
            </div>


        </div>
    )
}

export default LoginFormat
