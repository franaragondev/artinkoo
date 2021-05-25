import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';
import HeaderPages from '../../Header/HeaderPages'
import Footer from '../../Footer/Footer'

//Componente que renderizará la página de Quienes Somos
const QuienesSomos = (props) => {

    return (
        <div className='legales'>
            <HeaderPages />
            <h2 className='tituloLegales'>QUIENES SOMOS</h2>
            <div className='paginasFooter'>
                <img className='imagenLegales' alt='quienes_somos' src='../images/pexels-sharon-mccutcheon-1148998.jpg'></img>
            </div>
            <p className='parrafo_paginas_legales'>Desde artinkoo buscamos transmitir a nuestros clientes felicidad y color en su día a día a través de nuestra web de personalización de una gran variedad de productos y es por eso mismo, por lo que contamos con un diseño web colorido a la par que profesional.<br /><br />En artinkoo contamos con la filosofía de “por qué vivir en un mundo igual que los demás cuando puedes crearlo tú mismo”  y es por ello por lo que queremos que cada cliente que visite nuestra web se vaya con la satisfacción y el pensamiento de que quiere vivir en un mundo a su medida. </p>
            <Footer />
        </div>
    )
}

export default QuienesSomos
