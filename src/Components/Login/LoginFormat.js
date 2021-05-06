import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import { Link } from 'react-router-dom'

//Componente que renderizará el video de la primera carga
const LoginFormat = (props) => {
    return (
        <div className='loginFormat'>
            <p id='mensajeLogin'>LOGUEESE O REGÍSTRESE</p>
            <form action='' method=''>
                <input className='inputLogin' type='text' placeholder='Usuario' name='usuario' />
                <input className='inputLogin' type='password' placeholder='Contraseña' name='contraseña' />
                <button className='btnLogin' type='submit'>Iniciar Sesión</button>
            </form>
            <p>Regístrate <Link to='/register' className='link'>aquí</Link></p>
            <Link className='link' to='/home'>Volver a Inicio</Link>
        </div>
    )
}

export default LoginFormat
