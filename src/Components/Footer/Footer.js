import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';

//Componente que renderizará el pie de página de la web
const Footer = (props) => {
    const [emailRegistro, setEmailRegistro] = useState('')

    const registrarNewsletter = async () => {
        await Axios.post('https://artinkoo.herokuapp.com/registrarseNewsletter', { email: emailRegistro })
            .then(response => {
                if (response.data == 'Signed Up!') {
                    swal({
                        title: "BIENVENIDO A LA FAMILIA",
                        text: 'En breves momentos recibirás un email de confirmación (revise la bandeja de promociones).',
                        icon: "success",
                        button: "Ok!",
                    })
                } else {
                    swal({
                        title: "Oh! Algo ha fallado",
                        text: 'Asegúrese que el email introducido no está ya registrado e inténtelo de nuevo más tarde.',
                        icon: "success",
                        button: "Ok!",
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <footer>
                <div id="contacto">
                    <h1>CONTÁCTANOS</h1>
                    <p>Para cualquier consulta, envíanos un correo electrónico:</p>
                    <a href="mailto:franaragondeveloper@gmail.com?Subject=Solicitar%20Información">
                        <p>info@artinkoo.com</p>
                    </a>
                </div>
                <hr />

                <div id="newsletter">
                    <h1>SUBSCRÍBETE A NUESTRA REVISTA</h1>
                    <input required name='email' type="email" pattern="[^ @]*@[^ @]*" placeholder="Introduzca su email" onChange={(e) => { setEmailRegistro(e.target.value) }} />
                    <button type="submit" id="botonEnviar" onClick={registrarNewsletter}>Enviar</button>
                </div>
                <hr />

                <ul id="menuPiePagina">
                    <li>
                        <a href="#">Sobre Nosotros</a>
                        <input type="checkbox" id="submenu1" />
                        <label for="submenu1">+</label>
                        <ul>
                            <li><a href="pages/quienes_somos.html">¿Quiénes somos?</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Legal</a>
                        <input type="checkbox" id="submenu2" />
                        <label for="submenu2">+</label>
                        <ul>
                            <li><a href="pages/politica_privacidad.html">Política de Privacidad</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Servicio al cliente</a>
                        <input type="checkbox" id="submenu3" />
                        <label for="submenu3">+</label>
                        <ul>
                            <li><Link to='/contactanos'>Contáctanos</Link></li>
                            <li><a href="#">Envíos y Devoluciones</a></li>
                        </ul>
                    </li>
                </ul>

                <div id="redes_sociales">
                    <h1>SÍGUENOS EN REDES SOCIALES</h1>
                    <a target="_blank" href="https://www.facebook.com/artinkoo/"><img alt="facebook"
                        src="https://proyecto-final-fran-aragon.netlify.app/images/Facebook_Rounded_Solid_icon-icons.com_61562.png" /></a>
                    <a target="_blank" href="https://twitter.com/artinkoo_ofi"><img alt="twitter"
                        src="https://proyecto-final-fran-aragon.netlify.app/images/Twitter_Rounded_Solid_icon-icons.com_61561.png" /></a>
                    <a target="_blank" href="https://www.instagram.com"><img alt="instagram"
                        src="https://proyecto-final-fran-aragon.netlify.app/images/Instagram_Rounded_Solid_icon-icons.com_61560.png" /></a>
                </div>

                <p>
                    <a href="http://jigsaw.w3.org/css-validator/check/referer">
                        <img /*style={"border:0;width:88px;height:31px"}*/
                            src="//jigsaw.w3.org/css-validator/images/vcss-blue"
                            alt="¡CSS Válido!" />
                    </a>
                </p>

                <div id="pie">
                    <p>© 2020 artinkoo &bull; Todos los Derechos Reservados</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer
