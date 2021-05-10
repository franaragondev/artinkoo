import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie'
import swal from 'sweetalert';

//Componente que renderizará el video de la primera carga
const LoginFormat = (props) => {
    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [loguinStatus, setLoguinStatus] = useState('')
    const cookies = new Cookies()

    const loguin = async () => {
        await Axios.post('https://artinkoo.herokuapp.com/login',
            { nombreUsuario: nombre, contrasenia: md5(password) })
            .then(response => {
                // if (response.data.message) {
                // setLoguinStatus(response.data.message)
                // return response.data;
                // } else {
                // setLoguinStatus('Bienvenido: ' + response.data[0].nombreUsuario)
                return response.data;
                // }
                // console.log(response);
            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0]
                    cookies.set('idUsuario', respuesta.idUsuario, { path: '/' })
                    cookies.set('nombre', respuesta.nombre, { path: '/' })
                    cookies.set('apellidos', respuesta.apellidos, { path: '/' })
                    cookies.set('direccion', respuesta.direccion, { path: '/' })
                    cookies.set('ciudad', respuesta.ciudad, { path: '/' })
                    cookies.set('provincia', respuesta.provincia, { path: '/' })
                    cookies.set('codigoPostal', respuesta.codigoPostal, { path: '/' })
                    cookies.set('cesta', respuesta.cesta, { path: '/' })
                    cookies.set('nombreUsuario', respuesta.nombreUsuario, { path: '/' })
                    cookies.set('email', respuesta.email, { path: '/' })
                    swal({
                        title: "Sesión Iniciada",
                        text: `Bienvenido, ${respuesta.nombre} ${respuesta.apellidos}`,
                        icon: "success",
                        button: "Ok!",
                    });
                } else {
                    swal({
                        title: "Oh! Algo ha fallado.",
                        text: "Usuario o Contraseña incorrectos",
                        icon: "error",
                        button: "Volver",
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className='loginFormat'>
            <p className='mensajeLogin'>INICIAR SESIÓN</p>
            <div>
                <input className='inputLogin' type='text' placeholder='Usuario' name='usuario' onChange={(e) => handleNombre(e)} />
                <input className='inputLogin' type='password' placeholder='Contraseña' name='contrasenia' onChange={(e) => handlePassword(e)} />
                <button className='btnLogin' onClick={loguin}>Iniciar Sesión</button>
            </div>
            <p id='registrateLink'>Regístrate <Link to='/register' className='link'>aquí</Link></p>
            <div className='flecha'>
                {/* <picture>
                    <img id='flecha' alt='flecha' src='../images/flecha.svg'></img>
                </picture> */}
                <Link className='link' to='/home'>
                    Volver a Inicio
            </Link>
            </div>
            {/* <h1>{loguinStatus}</h1> */}
        </div>
    )
}

export default LoginFormat
