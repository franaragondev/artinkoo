import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import { Link } from 'react-router-dom'

//Componente que renderizará el video de la primera carga
const LoginFormat = (props) => {
    return (
        <div className='loginFormat'>
            <p id='mensajeLogin'>LOGUEESE O REGÍSTRESE</p>
            <form action='' method=''>
                <input type='text' placeholder='Usuario' name='usuario' />
                <input type='password' placeholder='Contraseña' name='contraseña' />
                <button type='submit'>Iniciar Sesión</button>
            </form>
            <p>Regístrate <strong>aquí</strong></p>
            <Link to='/home'>Volver al Incio</Link>
        </div>
    )
}

export default LoginFormat
