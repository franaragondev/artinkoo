import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import md5 from 'md5'
import Cookies from 'universal-cookie'
import swal from 'sweetalert';
import GoogleLogin from 'react-google-login'

//Componente que renderizará el video de la primera carga
const LoginFormat = (props) => {
    const [nombre, setNombre] = useState('')
    const [password, setPassword] = useState('')
    const [loguinStatus, setLoguinStatus] = useState('')
    const [datosGoogle, setDatosGoogle] = useState([])
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
                        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
                    })
                } else {
                    swal({
                        title: "Oh! Algo ha fallado.",
                        text: "Usuario o Contraseña incorrectos",
                        icon: "error",
                        button: "Volver",
                    }).then(function () {
                        //     // window.location.href = 'http://localhost:3000/login'
                        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
                    })
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
        // window.location.href = 'http://localhost:3000/login'
        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
    }

    const cerrarSesionGoogle = () => {
        cookies.remove('idGoogle', { path: '/' })
        cookies.remove('nombreGoogle', { path: '/' })
        cookies.remove('apellidosGoogle', { path: '/' })
        cookies.remove('emailGoogle', { path: '/' })
        // window.location.href = 'http://localhost:3000/login'
        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
    }

    const handleNombre = (e) => {
        setNombre(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const responseGoogle = (respuesta) => {
        setDatosGoogle(respuesta.profileObj)
        cookies.set('idGoogle', respuesta.profileObj.googleId, { path: '/' })
        cookies.set('nombreGoogle', respuesta.profileObj.givenName, { path: '/' })
        cookies.set('apellidosGoogle', respuesta.profileObj.familyName, { path: '/' })
        cookies.set('emailGoogle', respuesta.profileObj.email, { path: '/' })
        swal({
            title: "Sesión Iniciada",
            text: `Bienvenido, ${cookies.get('nombreGoogle')} ${cookies.get('apellidosGoogle')}`,
            icon: "success",
            button: "Ok!",
        }).then(function () {
            // window.location.href = 'http://localhost:3000/login'
            window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
        })
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
                    <div className='opcion'>
                        <Link to='/datosPersonales' className='opcionUsuarioLink'>
                            <div className='opcionUsuario'>
                                <p>MIS DATOS PERSONALES</p>
                                <img src='./images/datosIco.png' alt='datos personales'></img>
                            </div>
                        </Link>
                    </div>
                    <div className='opcion'>
                        <Link to='/misPedidos' className='opcionUsuarioLink'>
                            <div className='opcionUsuario'>
                                <p>MIS PEDIDOS REALIZADOS</p>
                                <img src='./images/pedidosIco.png' alt='pedidos'></img>
                            </div>
                        </Link>
                    </div>
                    <div className='opcion'>
                        <Link to='/misPedidos' className='opcionUsuarioLink'>
                            <div className='opcionUsuario'>
                                <p>SEGUIMIENTO DEL PEDIDO</p>
                                <img className='camionIco' src='./images/truck_13241.png' alt='seguimiento'></img>
                            </div>
                        </Link>
                    </div>
                    <div className='opcion'>
                        <Link to='/ayuda' className='opcionUsuarioLink'>
                            <div className='opcionUsuario'>
                                <p>AYUDA</p>
                                <img src='./images/infoIco.png' alt='información'></img>
                            </div>
                        </Link>
                    </div>
                </div>
                <Link className='linkHome' to='/home'>
                    Volver a Inicio
                </Link>
            </div>
        )
    } else if (datosGoogle != undefined && cookies.get('idGoogle')) {
        return (
            <div className='loginFormat'>
                <h2>PANEL DE USUARIO</h2>
                <div className='cerrarSesion'>
                    <h3>Bienvenido, {cookies.get('nombreGoogle')} {cookies.get('apellidosGoogle')}</h3>
                    <button className='btnLogin' onClick={cerrarSesionGoogle}>Cerrar Sesión</button>
                </div>
                <div className='opcionesUsuario'>
                    <Link to='/datosPersonales' className='opcionUsuarioLink'>
                        <div className='opcionUsuario'>
                            <p>MIS DATOS PERSONALES</p>
                            <img src='./images/datosIco.png' alt='datos personales'></img>
                        </div>
                    </Link>
                    <Link to='/ayuda' className='opcionUsuarioLink'>
                        <div className='opcionUsuario'>
                            <p>AYUDA</p>
                            <img src='./images/infoIco.png' alt='información'></img>
                        </div>
                    </Link>

                </div>
                <p><Link className='linkHome' to='/home'>
                    Volver a Inicio
                </Link></p>
            </div>
        )
    } else {
        return (
            <div className='loginFormat'>
                <p className='mensajeLogin'>INICIAR SESIÓN</p>
                <div className='inicioSesion'>
                    <input className='inputLogin' type='text' placeholder='Usuario' name='usuario' onChange={handleNombre} />
                    <input className='inputLogin' type='password' placeholder='Contraseña' name='contrasenia' onChange={handlePassword} />
                    <button className='btnLogin' onClick={loguin}>Iniciar Sesión</button>
                    <div>
                        <GoogleLogin
                            clientId="451365567546-0bfhrbcj0kgm6k18guhc9ru94h6gtsvs.apps.googleusercontent.com"
                            buttonText="Iniciar Sesión"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>
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
            </div >
        )
    }
}

export default LoginFormat
