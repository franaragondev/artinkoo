import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import LoginFormat from './LoginFormat'
import { Link } from 'react-router-dom'

//Componente que renderizará el login de la aplicación
const Login = (props) => {
    return (
        <div className='login_container'>
            <Link to='/home'>
                <picture>
                    <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
                </picture>
            </Link>
            <LoginFormat />
        </div>
    )
}

export default Login
