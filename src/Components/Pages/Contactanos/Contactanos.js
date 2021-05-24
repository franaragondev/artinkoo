import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';
import HeaderPages from '../../Header/HeaderPages'
import Footer from '../../Footer/Footer'

//Componente que renderizará la página de contacto
const Contactanos = (props) => {
    const [nombre, setNombre] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [email, setEmail] = useState('')

    const enviarEmail = async () => {
        if (nombre != '' && mensaje != '' && email != '') {
            await Axios.post('https://artinkoo.herokuapp.com/contacto',
                { nombre: nombre, email: email, mensaje: mensaje })
                .then(response => {
                    if (response.statusText == 'OK') {
                        swal({
                            title: "Email Enviado.",
                            text: `Le mandaremos un email respondiéndole lo antes posible.`,
                            icon: "success",
                            button: "Ok!",
                        }).then(function () {
                            // window.location.href = 'http://localhost:3000/login'
                            window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/home'
                        })
                    } else {
                        swal({
                            title: "Oh! Algo ha fallado.",
                            text: "Inténtelo de nuevo más tarde.",
                            icon: "error",
                            button: "Volver",
                        }).then(function () {
                            // window.location.href = 'http://localhost:3000/login'
                            window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/home'
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

    return (
        <div className='contactanos'>
            <HeaderPages />
            <div className='datosPersonales'>
                <h2>CONTÁCTANOS</h2>
                <h4 className='mensajeAyuda'>Por favor, rellene el formulario de debajo y le responderemos en la mayor brevedad posible.</h4>
                <div id="contact_form">
                    <div className="row">
                        <label for="nombre">Nombre:</label>
                        <input required placeholder='Introduzca su nombre' id="nombre" className="inputContacto" name="nombre" type="text" size="30" onChange={(e) => { setNombre(e.target.value) }} />
                    </div>
                    <div className="row">
                        <label for="email">Email:</label>
                        <input required placeholder='Introduzca su email' id="email" className="inputContacto" name="email" type="email" size="30" onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="row">
                        <label for="mensaje">Mensaje:</label>
                        <textarea required placeholder='Detalle su problema para poder ofrecerle la mejor ayuda' id="mensaje" className="inputContacto" name="mensaje" rows="7" cols="30" onChange={(e) => { setMensaje(e.target.value) }}></textarea>
                    </div>

                    <input id="submit_button_contacto" type="submit" value="Enviar email" onClick={enviarEmail} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contactanos
