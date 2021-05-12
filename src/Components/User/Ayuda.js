import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';

//Componente que renderizará el video de la primera carga
const Ayuda = (props) => {

    return (
        <div className='login_container'>
            <Link to='/home'>
                <picture>
                    <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
                </picture>
            </Link>
            <div className='datosPersonales'>
                <h2>AYUDA</h2>
                <h4 className='mensajeMisPedidos'>Actualmente no existe ninguna ayuda para mostrar.</h4>
                <Link className='linkDatosPersonales' to='/login'>
                    Volver al Panel de Usuario
                    </Link>
            </div>
        </div>
    )
}

export default Ayuda
