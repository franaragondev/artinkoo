import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'

//Componente que renderizará el video de la primera carga
const DatosPersonales = (props) => {
    const cookies = new Cookies()
    const [editarBoolean, setEditarBoolean] = useState(false)
    const [nombre, setNombre] = useState(cookies.get('nombre'))
    const [apellidos, setApellidos] = useState(cookies.get('apellidos'))
    const [direccion, setDireccion] = useState(cookies.get('direccion'))
    const [ciudad, setCiudad] = useState(cookies.get('ciudad'))
    const [provincia, setProvincia] = useState(cookies.get('provincia'))
    const [codigoPostal, setCodigoPostal] = useState(cookies.get('codigoPostal'))
    const [email, setEmail] = useState(cookies.get('email'))
    const [usuario, setUsuario] = useState(cookies.get('nombreUsuario'))

    const funcionEditar = () => {
        setEditarBoolean(true)
    }

    console.log(nombre);

    if (editarBoolean) {
        return (
            <div className='login_container'>
                <picture>
                    <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
                </picture>
                <div className='datosPersonales'>
                    <h2>DATOS PERSONALES</h2>
                    <input placeholder='Nombre' value={cookies.get('nombre')} onChange={(e) => { setNombre(e.target.value) }} />
                    <input placeholder='Apellidos' value={cookies.get('apellidos')} />
                    <input placeholder='Nombre de Usuario' value={cookies.get('nombreUsuario')} />
                    <input placeholder='Email' value={cookies.get('email')} />
                    <input placeholder='Provincia' value={cookies.get('provincia')} />
                    <input placeholder='Ciudad' value={cookies.get('ciudad')} />
                    <input placeholder='Código Postal' value={cookies.get('codigoPostal')} />
                    <input placeholder='Dirección' value={cookies.get('direccion')} />

                    <button className='botonEditar'>Editar</button>
                    <Link className='linkDatosPersonales' to='/home'>
                        Volver a Inicio
                    </Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className='login_container'>
                <picture>
                    <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
                </picture>
                <div className='datosPersonales'>
                    <h2>DATOS PERSONALES</h2>
                    <h4><span className='columnaDatosPersonales'>Nombre:</span> {cookies.get('nombre')}</h4>
                    <h4><span className='columnaDatosPersonales'>Apellidos:</span> {cookies.get('apellidos')}</h4>
                    <h4><span className='columnaDatosPersonales'>Nombre de Usuario:</span> {cookies.get('nombreUsuario')}</h4>
                    <h4><span className='columnaDatosPersonales'>Email:</span> {cookies.get('email')}</h4>
                    <h4><span className='columnaDatosPersonales'>Provincia:</span> {cookies.get('provincia')}</h4>
                    <h4><span className='columnaDatosPersonales'>Ciudad:</span> {cookies.get('ciudad')}</h4>
                    <h4><span className='columnaDatosPersonales'>Código Postal:</span> {cookies.get('codigoPostal')}</h4>
                    <h4><span className='columnaDatosPersonales'>Dirección:</span> {cookies.get('direccion')}</h4>

                    <button className='botonEditar' onClick={funcionEditar}>Editar</button>
                    <Link className='linkDatosPersonales' to='/home'>
                        Volver a Inicio
                    </Link>
                </div>
            </div>
        )
    }
}

export default DatosPersonales
