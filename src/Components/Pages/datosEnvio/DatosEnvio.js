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
    const cookies = new Cookies()

    const cambiarTituloyContacto = () => {
        setCambiarContanto(!cambiarContacto)
        if (!cambiarContacto) {
            document.getElementById('cambiar_datos').innerHTML = 'Cancelar'
        } else {
            document.getElementById('cambiar_datos').innerHTML = 'Cambiar'
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

    if (cookies.get('nombre')) {
        return (
            <div>
                <Header />
                <div>
                    <div id='total'>
                        <p id='total_texto'>TOTAL</p>
                        <p id='precio_total'>{parseInt(cookies.get('precioTotal')) + 3.5}€</p>
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
                            <p id='cambiar_datos'>Cambiar</p>
                            <p>{cookies.get('direccion') + ', ' + cookies.get('ciudad') + ', ' + cookies.get('provincia') + ', ' + cookies.get('codigoPostal')}</p>
                        </div>
                    </div>

                    <p id='metodo_envio'>Método de Envío</p>

                    <div id='datos_envio'>
                        <p>Método de envío</p>
                        <p>3.50€</p>
                    </div>

                    <button id='continuar_pagos'>CONTINUAR CON PAGOS</button>
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
