import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import { Link } from 'react-router-dom'
import RegisterForm from './RegisterForm'

//Componente que renderizará el registro de la aplicación
const Register = (props) => {
    return (
        <div className='login_container'>
            <Link to='/home'>
                <picture>
                    <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
                </picture>
            </Link>
            <RegisterForm />
        </div>
    )
}

export default Register
