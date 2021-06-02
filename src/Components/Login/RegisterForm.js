import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import md5 from 'md5'
import swal from 'sweetalert';
import $ from "jquery";
import EnlaceServer from '../EnlaceServer'

//Componente que renderizará el formato del registro de la aplicación
const RegisterForm = (props) => {
    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [direccion, setDireccion] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [provincia, setProvincia] = useState('')
    const [codigoPostal, setCodigoPostal] = useState('')
    const [email, setEmail] = useState('')
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [enlace, setEnlace] = useState(EnlaceServer)

    const borrarCuentaDuplicada = (idInsertada) => {
        console.log('hola');
        Axios.post(enlace + '/borrarCuenta',
            // Axios.post('http://localhost:8000/borrarCuenta',
            { idUsuario: idInsertada })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const registerDataUser = async (idInsertada) => {
        console.log(idInsertada);
        await Axios.post(enlace + '/registerDatosUser',
            // await Axios.post('http://localhost:8000/registerDatosUser',
            { usuario: usuario, contrasenia: md5(password), idUsuario: idInsertada })
            .then(response => {
                if (response.data.affectedRows == 1) {
                    swal({
                        title: "Registro Correcto!",
                        text: 'Inicie Sesión desde el icono de usuarios',
                        icon: "success",
                        button: "Ok!",
                    }).then(function () {
                        // window.location.href = 'http://localhost:3000/login'
                        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
                    })
                } else {
                    borrarCuentaDuplicada(idInsertada)
                    swal({
                        title: "Oh! Algo ha fallado.",
                        text: "Intente registrarse de nuevo más tarde.",
                        icon: "error",
                        button: "Volver",
                    }).then(function () {
                        // window.location.href = 'http://localhost:3000/login'
                        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/home'
                    })
                }
            })
            .catch(error => {
                swal({
                    title: "Oh! Usuario ya en uso.",
                    text: "Por favor, elija otro usuario para poder registrarse.",
                    icon: "error",
                    button: "Volver",
                })
                    .then(function () {
                        // window.location.href = 'http://localhost:3000/login'
                        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/home'
                    })
                borrarCuentaDuplicada(idInsertada)
            })
    }

    const register = async () => {
        if (nombre != '' && apellidos != '' && direccion != '' && ciudad != '' && provincia != '' && codigoPostal != '' && email != '' && usuario != '' && password != '') {
            await Axios.post(enlace + '/register',
                // await Axios.post('http://localhost:8000/register',
                { nombre: nombre, apellidos: apellidos, direccion: direccion, ciudad: ciudad, provincia: provincia, codigoPostal: codigoPostal, nombreUsuario: usuario, contrasenia: md5(password), email: email })
                .then(response => {
                    registerDataUser(response.data.insertId)
                })
                .catch(error => {
                    console.log(error);
                })
        } else {
            if (nombre != '' && apellidos != '' && direccion != '' && ciudad != '' && provincia != '' && email != '' && usuario != '' && password != '' && codigoPostal == '') {
                setCodigoPostal('')
                $('input[type="number"]').val('');
                swal({
                    title: "Oh! Tiene campos incorrectos.",
                    text: "Por favor, rellene los campos correctamente.",
                    icon: "error",
                    button: "Volver",
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
    }

    return (
        <div className='loginFormat'>
            <p className='mensajeLogin'>REGÍSTRATE</p>
            <div className='opcionesRegistro'>
                <input required className='inputLogin' type='text' placeholder='Nombre' name='nombre' onChange={(e) => { setNombre(e.target.value) }} />
                <input required className='inputLogin' type='text' placeholder='Apellidos' name='apellidos' onChange={(e) => { setApellidos(e.target.value) }} />
                <input required className='inputLogin' type='text' placeholder='Dirección' name='direccion' onChange={(e) => { setDireccion(e.target.value) }} />
                <input required className='inputLogin' type='text' placeholder='Ciudad' name='ciudad' onChange={(e) => { setCiudad(e.target.value) }} />
                <input required className='inputLogin' type='text' placeholder='Provincia' name='provincia' onChange={(e) => { setProvincia(e.target.value) }} />
                <input required className='inputLogin' type='number' placeholder='Código Postal' name='codigoPostal' onChange={(e) => { setCodigoPostal(e.target.value) }} />
                <input required className='inputLogin' type='email' placeholder='Email' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                <input required className='inputLogin' type='text' placeholder='Usuario' name='usuario' onChange={(e) => { setUsuario(e.target.value) }} />
                <input required className='inputLogin' type='password' placeholder='Contraseña' name='contrasenia' onChange={(e) => { setPassword(e.target.value) }} />
                <button className='btnLogin' onClick={register}>Registrarse</button>
            </div>
            <Link to='/login' className='link'>Iniciar Sesión </Link>
        </div>
    )
}

export default RegisterForm
