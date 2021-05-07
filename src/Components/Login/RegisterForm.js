import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import { Link } from 'react-router-dom'

//Componente que renderizará el video de la primera carga
const RegisterForm = (props) => {
    return (
        <div className='loginFormat'>
            <p className='mensajeLogin'>REGÍSTRATE</p>
            <form action='http://localhost:8000/register' method='POST'>
                <input required className='inputLogin' type='text' placeholder='Nombre' name='nombre' />
                <input required className='inputLogin' type='text' placeholder='Apellidos' name='apellidos' />
                <input required className='inputLogin' type='text' placeholder='Dirección' name='direccion' />
                <input required className='inputLogin' type='text' placeholder='Ciudad' name='ciudad' />
                <input required className='inputLogin' type='text' placeholder='Provincia' name='provincia' />
                <input required className='inputLogin' type='text' placeholder='Código Postal' name='codigoPostal' />
                <input required className='inputLogin' type='mail' placeholder='Email' name='email' />
                <input required className='inputLogin' type='text' placeholder='Usuario' name='usuario' />
                <input required className='inputLogin' type='password' placeholder='Contraseña' name='contrasenia' />
                <button className='btnLogin' type='submit'>Registrarse</button>
            </form>
            <Link to='/login' className='link'>Iniciar Sesión </Link>
        </div>
    )
}

export default RegisterForm
