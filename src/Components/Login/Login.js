import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import LoginFormat from './LoginFormat'

//Componente que renderizará el video de la primera carga
const Login = (props) => {
    return (
        <div className='login_container'>
            <picture>
                <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
            </picture>
            <LoginFormat />
        </div>
    )
}

export default Login
