import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//Componente que renderizará el pie de página de la web
const Footer = (props) => {
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
                    <form>
                        <input required type="email" pattern="[^ @]*@[^ @]*" placeholder="Introduzca su email" />
                        <button type="submit" id="botonEnviar">Enviar</button>
                    </form>
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
                            <li><a href="pages/contacto.html">Contáctanos</a></li>
                            <li><a href="#">Envíos y Devoluciones</a></li>
                        </ul>
                    </li>
                </ul>

                <div id="redes_sociales">
                    <h1>SÍGUENOS EN REDES SOCIALES</h1>
                    <a target="_blank" href="https://www.facebook.com"><img alt="facebook"
                        src="images/Facebook_Rounded_Solid_icon-icons.com_61562.png" /></a>
                    <a target="_blank" href="https://www.twitter.com"><img alt="twitter"
                        src="images/Twitter_Rounded_Solid_icon-icons.com_61561.png" /></a>
                    <a target="_blank" href="https://www.instagram.com"><img alt="instagram"
                        src="images/Instagram_Rounded_Solid_icon-icons.com_61560.png" /></a>
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
