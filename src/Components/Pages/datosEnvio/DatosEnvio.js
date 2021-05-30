import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import swal from 'sweetalert';
import Footer from '../../Footer/Footer'
import GoToTop from '../../GoToTop/GoToTop'
import Header from '../../Header/HeaderCarrito'

//Componente que renderizará la página de los datos del envío
const DatosEnvio = (props) => {
    const [cambiarContacto, setCambiarContanto] = useState(false)
    const [editarEmail, setEditarEmail] = useState('')
    const [cambiarDireccion, setCambiarDireccion] = useState(false)
    const [editarDireccion, setEditarDireccion] = useState('')
    const [editarCiudad, setEditarCiudad] = useState('')
    const [editarProvincia, setEditarProvincia] = useState('')
    const [editarCodigoPostal, setEditarCodigoPostal] = useState('')
    const [comentarios, setComentarios] = useState('')
    const [codigoDescuento, setCodigoDescuento] = useState('')
    const [codigoUsado, setCodigoUsado] = useState(false)
    const cookies = new Cookies()

    const cambiarTituloyContacto = () => {
        setCambiarContanto(!cambiarContacto)
        if (!cambiarContacto) {
            document.getElementById('cambiar_datos').innerHTML = 'Cancelar'
        } else {
            document.getElementById('cambiar_datos').innerHTML = 'Cambiar'
        }
    }

    const cambiarTituloyDireccion = () => {
        setCambiarDireccion(!cambiarDireccion)
        if (!cambiarDireccion) {
            document.getElementById('cambiar_datos1').innerHTML = 'Cancelar'
        } else {
            document.getElementById('cambiar_datos1').innerHTML = 'Cambiar'
        }
    }

    const actualizarEmail = async () => {
        if (editarEmail != '') {
            await Axios.post('http://localhost:8000/actualizarEmail',
                // await Axios.post('https://artinkoo.herokuapp.com/actualizarEmail',
                { email: editarEmail, idUsuario: cookies.get('idUsuario') })
                .then(response => {
                    if (response.statusText == 'OK') {
                        cookies.set('email', editarEmail, { path: '/' })
                        swal({
                            title: "Email Actualizado",
                            text: `Su email ha sido actualizado correctamente.`,
                            icon: "success",
                            button: "Ok!",
                        }).then(function () {
                            window.location.href = 'http://localhost:3000/datosEnvio'
                            // window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/datosEnvio'
                        })
                    } else {
                        swal({
                            title: "Oh! Algo ha fallado.",
                            text: "Inténtelo de nuevo más tarde.",
                            icon: "error",
                            button: "Volver",
                        }).then(function () {
                            window.location.href = 'http://localhost:3000/datosEnvio'
                            // window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/datosEnvio'
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            swal({
                title: "Oh! Tiene el email vacío.",
                text: "Por favor, introduzca un email para poder actualizarlo.",
                icon: "error",
                button: "Volver",
            })
        }
    }

    const actualizarDireccion = async () => {
        if (editarDireccion != '' && editarCiudad != '' && editarProvincia != '' && editarCodigoPostal != '') {
            await Axios.post('http://localhost:8000/actualizarDireccion',
                // await Axios.post('https://artinkoo.herokuapp.com/actualizarEmail',
                { direccion: editarDireccion, ciudad: editarCiudad, provincia: editarProvincia, codigoPostal: editarCodigoPostal, idUsuario: cookies.get('idUsuario') })
                .then(response => {
                    if (response.statusText == 'OK') {
                        cookies.set('direccion', editarDireccion, { path: '/' })
                        cookies.set('ciudad', editarCiudad, { path: '/' })
                        cookies.set('provincia', editarProvincia, { path: '/' })
                        cookies.set('codigoPostal', editarCodigoPostal, { path: '/' })
                        swal({
                            title: "Dirección Actualizada",
                            text: `Su dirección de envío ha sido actualizada correctamente.`,
                            icon: "success",
                            button: "Ok!",
                        }).then(function () {
                            window.location.href = 'http://localhost:3000/datosEnvio'
                            // window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/datosEnvio'
                        })
                    } else {
                        swal({
                            title: "Oh! Algo ha fallado.",
                            text: "Inténtelo de nuevo más tarde.",
                            icon: "error",
                            button: "Volver",
                        }).then(function () {
                            window.location.href = 'http://localhost:3000/datosEnvio'
                            // window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/datosEnvio'
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            swal({
                title: "Oh! Tiene campos vacíos.",
                text: "Por favor, rellene todos los campos para poder actualizar la direccióñn de envío.",
                icon: "error",
                button: "Volver",
            })
        }
    }

    const comprobarCodigoDescuento = () => {
        if (codigoDescuento == 'ARTINKOO10') {
            if (codigoUsado == false && !cookies.get('codigoUsado')) {
                setCodigoUsado(true)
                cookies.set('precioTotal', (parseInt(cookies.get('precioTotal') * .90)), { path: '/' })
                cookies.set('codigoUsado', true, { path: '/' })
                swal({
                    title: "Código Canjeado",
                    text: `El código de descuento se ha aplicado correctamente.`,
                    icon: "success",
                    button: "Ok!",
                })
            } else {
                swal({
                    title: "Oh! Código usado.",
                    text: "El código introducido ya ha sido usado una vez.",
                    icon: "error",
                    button: "Volver",
                })
            }
        } else {
            swal({
                title: "Oh! Código erróneo.",
                text: "El código introducido no es válido.",
                icon: "error",
                button: "Volver",
            })
        }
    }

    if (cookies.get('nombre')) {
        return (
            <div>
                <Header />
                <div>
                    <div id='total'>
                        <p id='total_texto'>TOTAL</p>
                        <p id='precio_total'>{parseInt(cookies.get('precioTotal')) + (parseInt(cookies.get('precioTotal') * .10))}€</p>
                    </div>

                    <div id='tabla_datos'>
                        <div id='datos_contacto'>
                            <p>Contacto</p>
                            <p id='cambiar_datos' onClick={() => cambiarTituloyContacto()}>Cambiar</p>
                            {cambiarContacto
                                ?
                                <div>
                                    <input className='cambiarContacto' placeholder='Introduzca un email de contacto' onChange={(e) => { setEditarEmail(e.target.value) }}></input>
                                    <button onClick={() => actualizarEmail()} className='btnCambiarContacto'>Actualizar</button>
                                </div>
                                :
                                <p>{cookies.get('email')}</p>
                            }
                        </div>
                        <div id='datos_contacto'>
                            <p>Dirección</p>
                            <p id='cambiar_datos1' onClick={() => cambiarTituloyDireccion()}>Cambiar</p>
                            {cambiarDireccion
                                ?
                                <div className='editarDireccionEnvio'>
                                    <input className='cambiarContacto' placeholder='Introduzca dirección' onChange={(e) => { setEditarDireccion(e.target.value) }}></input>
                                    <input className='cambiarContacto' placeholder='Introduzca ciudad' onChange={(e) => { setEditarCiudad(e.target.value) }}></input>
                                    <input className='cambiarContacto' placeholder='Introduzca provincia' onChange={(e) => { setEditarProvincia(e.target.value) }}></input>
                                    <input className='cambiarContacto' placeholder='Introduzca código postal' onChange={(e) => { setEditarCodigoPostal(e.target.value) }}></input>
                                    <button onClick={() => actualizarDireccion()} className='btnCambiarDireccion'>Actualizar</button>
                                </div>
                                :
                                <p>{cookies.get('direccion') + ', ' + cookies.get('ciudad') + ', ' + cookies.get('provincia') + ', ' + cookies.get('codigoPostal')}</p>
                            }
                        </div>
                    </div>

                    <p id='metodo_envio'>Método de Envío</p>

                    <div id='datos_envio'>
                        <p>Método de envío</p>
                        <p>{parseInt(cookies.get('precioTotal') * .10)}€</p>
                    </div>

                    <p id='descuentos'>Descuentos</p>

                    <div id='codigo_descuento'>
                        <input placeholder="Código de Descuento" onChange={(e) => { setCodigoDescuento(e.target.value) }} />
                        <picture>
                            <img onClick={() => comprobarCodigoDescuento()} src='../images/boton_flecha.png' />
                        </picture>
                    </div>

                    <p id='comentarios_adicionales'>Comentarios adicionales:</p>
                    <textarea id='textarea_comentarios_adicionales' onChange={(e) => { setComentarios(e.target.value) }}></textarea>

                    <button id='continuar_pagos'>CONTINUAR EN PASARELA DE PAGO</button>
                    <Link to='/carrito'><p id='volver_informacion'> Volver al carrito</p></Link>
                </div>
                <GoToTop />
                <Footer />
            </div>
        )
    } else {
        // window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/home'
        window.location.href = 'http://localhost:3000/home'
    }
}

export default DatosEnvio
