import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';
import HeaderPages from '../../Header/HeaderPages'
import Footer from '../../Footer/Footer'
import GoToTop from '../../GoToTop/GoToTop'

//Componente que renderizará la página de ALOJÚ
const Aloju = (props) => {

    return (
        <div>
            <HeaderPages />
            <GoToTop />
            <div className='alojuPage'>
                <section id="carrusel">
                    <div id="foto">
                        <picture>
                            <img alt="fotoCabecera" src="../images/alojuCabecera.jpg" />
                        </picture>
                    </div>
                </section>

                <p id='lema_aloju'>Hogar de la valentía y la rebeldía</p>

                <picture>
                    <img id='imagen1_aloju' alt="imagen1_alojú" src="../images/pexels-pixabay-416676.jpg" />
                </picture>

                <section id='origenes'>
                    <p>LOS ORÍGENES</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting induLorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        1500sstry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </section>

                <picture>
                    <img id='imagen2_aloju' alt="imagen2_alojú" src="../images/surfero.jpg" />
                </picture>

                <section id='vision'>
                    <p>NUESTRA VISIÓN</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting induLorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        1500sstry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </section>

                <picture>
                    <img id='imagen3_aloju' alt="imagen3_alojú" src="../images/pexels-guy-kawasaki-1654498.jpg" />
                </picture>

                <section id='rebeldia'>
                    <p>FABRICAMOS REBELDÍA</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting induLorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
        1500sstry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Aloju
