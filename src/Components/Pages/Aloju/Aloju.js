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
                <div id="foto">
                    <picture>
                        <img id='fotoCabecera' alt="fotoCabecera" src="../images/alojuCabecera.jpg" />
                    </picture>
                </div>

                <p id='lema_aloju'>Hogar de la valentía y la rebeldía</p>

                <picture>
                    <img className='imagenesAloju' id='imagen1_aloju' alt="imagen1_alojú" src="../images/pexels-pixabay-416676.jpg" />
                </picture>

                <section id='origenes'>
                    <p className='tituloParrafoAloju'>LOS ORÍGENES</p>
                    <p className='parrafoAloju'>Debido a la monotonía provocada por el COVID-19, artinkoo nace con la misión de cambiar
                    esto de forma radical, desde el primer momento del día hasta el último, cambiando la forma de vivir y de
                    vestir. artinkoo será el motor por el cual cambiarás tu día a día, dándole color y ese toque de
                     personalización propia que te haga ser inconfundible, único/a, en definitiva, que te haga ser tú.</p>
                </section>

                <picture>
                    <img className='imagenesAloju' id='imagen2_aloju' alt="imagen2_alojú" src="../images/surfero.jpg" />
                </picture>

                <section id='vision'>
                    <p className='tituloParrafoAloju'>NUESTRA VISIÓN</p>
                    <p className='parrafoAloju'>Desde artinkoo vemos la vida de otra forma ya que nos guiamos por la
                     filosofía de ALOJÚ la cual nos hace ser libres, rebeldes y sobre todo, felices.</p>
                </section>

                <picture>
                    <img className='imagenesAloju' id='imagen3_aloju' alt="imagen3_alojú" src="../images/pexels-guy-kawasaki-1654498.jpg" />
                </picture>

                <section id='rebeldia'>
                    <p className='tituloParrafoAloju'>FABRICAMOS REBELDÍA</p>
                    <p className='parrafoAlojuUltimo'>Desde el nacimiento de artinkoo siempre ha banderado la rebeldía.
                    Rebeldía que hace que vistas como tú quieras, que no te preocupes por los demás y que te sientas
                    agusto contigo mismo. Esa es la verdadera clave de la felicidad.</p>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Aloju
