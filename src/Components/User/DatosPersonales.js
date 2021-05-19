import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';

//Componente que renderizará el video de la primera carga
const DatosPersonales = (props) => {
    const cookies = new Cookies()
    const [editarBoolean, setEditarBoolean] = useState(false)
    const [nombre, setNombre] = useState(cookies.get('nombre'))
    const [apellidos, setApellidos] = useState(cookies.get('apellidos'))
    const [direccion, setDireccion] = useState(cookies.get('direccion'))
    const [ciudad, setCiudad] = useState(cookies.get('ciudad'))
    const [provincia, setProvincia] = useState(cookies.get('provincia'))
    const [codigoPostal, setCodigoPostal] = useState(cookies.get('codigoPostal'))
    const [email, setEmail] = useState(cookies.get('email'))
    const [usuario, setUsuario] = useState(cookies.get('nombreUsuario'))
    const [idUsuario, setIdUsuario] = useState(cookies.get('idUsuario'))

    const actualizar = async () => {
        if (nombre != '' && apellidos != '' && direccion != '' && ciudad != '' && provincia != '' && codigoPostal != '' && email != '' && usuario != '') {
            await Axios.post('https://artinkoo.herokuapp.com/actualizar',
                { nombre: nombre, apellidos: apellidos, direccion: direccion, ciudad: ciudad, provincia: provincia, codigoPostal: codigoPostal, nombreUsuario: usuario, email: email, idUsuario: idUsuario })
                .then(response => {
                    if (response.statusText == 'OK') {
                        cookies.set('nombre', nombre, { path: '/' })
                        cookies.set('apellidos', apellidos, { path: '/' })
                        cookies.set('direccion', direccion, { path: '/' })
                        cookies.set('ciudad', ciudad, { path: '/' })
                        cookies.set('provincia', provincia, { path: '/' })
                        cookies.set('codigoPostal', codigoPostal, { path: '/' })
                        cookies.set('nombreUsuario', usuario, { path: '/' })
                        cookies.set('email', email, { path: '/' })
                        swal({
                            title: "Datos Actualizados",
                            text: `Sus datos han sido actualizados correctamente.`,
                            icon: "success",
                            button: "Ok!",
                        }).then(function () {
                            // window.location.href = 'http://localhost:3000/login'
                            window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
                        })
                    } else {
                        swal({
                            title: "Oh! Algo ha fallado.",
                            text: "Inténtelo de nuevo más tarde.",
                            icon: "error",
                            button: "Volver",
                        }).then(function () {
                            // window.location.href = 'http://localhost:3000/login'
                            window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            swal({
                title: "Oh! Tiene campos vacíos.",
                text: "Por favor, rellene todos los campos.",
                icon: "error",
                button: "Volver",
            })
        }

    }

    const borrarCuenta = async () => {
        swal({
            title: "¿Estás seguro?",
            text: "Una vez borrada perderás todos los datos.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                Axios.post('https://artinkoo.herokuapp.com/borrarCuenta',
                    { idUsuario: idUsuario })
                    .then(response => {
                        if (response.statusText == 'OK') {
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
                            swal({
                                title: "Cuenta Borrada",
                                text: `Su cuenta ha sido borrada correctamente.`,
                                icon: "success",
                                button: "Ok!",
                            }).then(function () {
                                // window.location.href = 'http://localhost:3000/login'
                                window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
                            })
                        } else {
                            swal({
                                title: "Oh! Algo ha fallado.",
                                text: "Inténtelo de nuevo más tarde.",
                                icon: "error",
                                button: "Volver",
                            }).then(function () {
                                // window.location.href = 'http://localhost:3000/login'
                                window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
                            })
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            } else {
                swal({
                    title: "Proceso Cancelado",
                    text: `El proceso ha sido cancelado correctamente.`,
                    icon: "success",
                    button: "Ok!",
                })
            }
            // window.location.href = 'http://localhost:3000/login'
            // window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
        })
    }

    const funcionEditar = () => {
        setEditarBoolean(true)
    }

    if (cookies.get('idGoogle')) {
        return (
            <div className='login_container'>
                <Link to='/home'>
                    <picture>
                        <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
                    </picture>
                </Link>
                <div className='datosPersonales'>
                    <h2>DATOS PERSONALES</h2>
                    <div className='datosUsuario'>
                        <h4><span className='columnaDatosPersonales'>ID Google:</span> {cookies.get('idGoogle')}</h4>
                        <h4><span className='columnaDatosPersonales'>Nombre:</span> {cookies.get('nombreGoogle')}</h4>
                        <h4><span className='columnaDatosPersonales'>Apellidos:</span> {cookies.get('apellidosGoogle')}</h4>
                        <h4><span className='columnaDatosPersonales'>Email:</span> {cookies.get('emailGoogle')}</h4>
                    </div>
                    <Link className='linkDatosPersonalesGoogle' to='/login'>
                        Volver al Panel de Usuario
                    </Link>
                </div>
            </div>
        )
    } else {
        if (editarBoolean) {
            return (
                <div className='login_container'>
                    <Link to='/home'>
                        <picture>
                            <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
                        </picture>
                    </Link>
                    <div className='datosPersonales'>
                        <h2>DATOS PERSONALES</h2>
                        <input type='text' placeholder={cookies.get('nombre')} onChange={(e) => { setNombre(e.target.value) }} />
                        <input type='text' placeholder={cookies.get('apellidos')} onChange={(e) => { setApellidos(e.target.value) }} />
                        <input type='text' placeholder={cookies.get('nombreUsuario')} onChange={(e) => { setUsuario(e.target.value) }} />
                        <input type='email' placeholder={cookies.get('email')} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type='text' placeholder={cookies.get('provincia')} onChange={(e) => { setProvincia(e.target.value) }} />
                        <input type='text' placeholder={cookies.get('ciudad')} onChange={(e) => { setCiudad(e.target.value) }} />
                        <input type='number' placeholder={cookies.get('codigoPostal')} onChange={(e) => { setCodigoPostal(e.target.value) }} />
                        <input type='text' placeholder={cookies.get('direccion')} onChange={(e) => { setDireccion(e.target.value) }} />

                        <button className='botonEditar' onClick={actualizar}>Editar</button>
                        <Link className='linkDatosPersonales' to='/login'>
                            Volver al Panel de Usuario
                        </Link>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='login_container'>
                    <Link to='/home'>
                        <picture>
                            <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
                        </picture>
                    </Link>
                    <div className='datosPersonales'>
                        <h2>DATOS PERSONALES</h2>
                        <div className='datosUsuario'>
                            <h4><span className='columnaDatosPersonales'>Nombre:</span> {cookies.get('nombre')}</h4>
                            <h4><span className='columnaDatosPersonales'>Apellidos:</span> {cookies.get('apellidos')}</h4>
                            <h4><span className='columnaDatosPersonales'>Nombre de Usuario:</span> {cookies.get('nombreUsuario')}</h4>
                            <h4><span className='columnaDatosPersonales'>Email:</span> {cookies.get('email')}</h4>
                            <h4><span className='columnaDatosPersonales'>Provincia:</span> {cookies.get('provincia')}</h4>
                            <h4><span className='columnaDatosPersonales'>Ciudad:</span> {cookies.get('ciudad')}</h4>
                            <h4><span className='columnaDatosPersonales'>Código Postal:</span> {cookies.get('codigoPostal')}</h4>
                            <h4><span className='columnaDatosPersonales'>Dirección:</span> {cookies.get('direccion')}</h4>
                        </div>
                        <div className='botonesUsuario'>
                            <button className='botonEditar' onClick={funcionEditar}>Editar</button>
                            <button className='botonEditar' onClick={borrarCuenta}>Borrar Cuenta</button>
                        </div>

                        <Link className='linkDatosPersonales' to='/login'>
                            Volver al Panel de Usuario
                        </Link>
                    </div>
                </div>
            )
        }
    }
}

export default DatosPersonales
