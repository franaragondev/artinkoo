import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';

//Componente que renderizará el video de la primera carga
const MisPedidos = (props) => {

    return (
        <div className='login_container'>
            <picture>
                <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
            </picture>
            <div className='datosPersonales'>
                <h2>MIS PEDIDOS</h2>
                <h4 className='mensajeMisPedidos'>Actualmente no existe ningún pedido.</h4>
                <Link className='linkDatosPersonales' to='/home'>
                    Volver a Inicio
                    </Link>
            </div>
        </div>
    )
}

export default MisPedidos
