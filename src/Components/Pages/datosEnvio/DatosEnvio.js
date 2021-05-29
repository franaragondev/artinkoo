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
    const cookies = new Cookies()

    const cambiarTituloyContacto = () => {
        setCambiarContanto(!cambiarContacto)
        if (!cambiarContacto) {
            document.getElementById('cambiar_datos').innerHTML = 'Cancelar'
        } else {
            document.getElementById('cambiar_datos').innerHTML = 'Cambiar'
        }
    }

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
                                <input className='cambiarContacto' placeholder='Introduzca un email de contacto'></input>
                                <button>Cambiar</button>
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
}

export default DatosEnvio
