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
                    }).then(function () {
                        // window.location.href = 'http://localhost:3000/home'
                        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/'
                    })
                } else {
                    swal({
                        title: "Oh! Algo ha fallado.",
                        text: "Usuario o Contraseña incorrectos",
                        icon: "error",
                        button: "Volver",
                    })
                    // .then(function () {
                    //     // window.location.href = 'http://localhost:3000/login'
                    //     window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/'
                    // })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const cerrarSesion = () => {
        cookies.remove('idUsuario', { path: '/' })
        cookies.remove('nombre', { path: '/' })
        cookies.remove('apellidos', { path: '/' })
        cookies.remove('direccion', { path: '/' })
        cookies.remove('ciudad', { path: '/' })
        cookies.remove('provincia', { path: '/' })
        cookies.remove('codigoPostal', { path: '/' })
        cookies.remove('cesta', { path: '/' })
        cookies.remove('nombreUsuario', { path: '/' })
        cookies.remove('email', { path: '/' })
        // window.location.href = 'http://localhost:3000/home'
        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/'
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    if (cookies.get('nombre')) {
        return (
            <div className='loginFormat'>
                <h2>PANEL DE USUARIO</h2>
                <div className='cerrarSesion'>
                    <h3>Bienvenido, {cookies.get('nombre')} {cookies.get('apellidos')}</h3>
                    <button className='btnLogin' onClick={cerrarSesion}>Cerrar Sesión</button>
                </div>
                <div className='opcionesUsuario'>
                    <div className='opcionUsuario'>
                        <p>MIS DATOS PERSONALES</p>
                        <img src='./images/datosIco.png' alt='datos personales'></img>
                    </div>
                    <div className='opcionUsuario'>
                        <p>MIS PEDIDOS</p>
                        <img src='./images/pedidosIco.png' alt='pedidos'></img>
                    </div>
                    <div className='opcionUsuario'>
                        <p>AYUDA</p>
                        <img src='./images/infoIco.png' alt='información'></img>
                    </div>
                </div>

            </div>
        )
    } else {
        return (
            <div className='loginFormat'>
                <p className='mensajeLogin'>INICIAR SESIÓN</p>
                <div>
                    <input className='inputLogin' type='text' placeholder='Usuario' name='usuario' onChange={handleNombre} />
                    <input className='inputLogin' type='password' placeholder='Contraseña' name='contrasenia' onChange={handlePassword} />
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
}

export default LoginFormat
