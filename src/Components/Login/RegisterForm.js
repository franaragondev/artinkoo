import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import md5 from 'md5'
import swal from 'sweetalert';

//Componente que renderizará el video de la primera carga
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

    const register = async () => {
        await Axios.post('https://artinkoo.herokuapp.com/register',
            { nombre: nombre, apellidos: apellidos, direccion: direccion, ciudad: ciudad, provincia: provincia, codigoPostal: codigoPostal, nombreUsuario: usuario, contrasenia: md5(password), email: email })
            .then(response => {
                if (response.data.affectedRows == 1) {
                    console.log(response);
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
                console.log(error);
            })
    }

    return (
        <div className='loginFormat'>
            <p className='mensajeLogin'>REGÍSTRATE</p>
            <div>
                <input required className='inputLogin' type='text' placeholder='Nombre' name='nombre' onChange={(e) => { setNombre(e.target.value) }} />
                <input required className='inputLogin' type='text' placeholder='Apellidos' name='apellidos' onChange={(e) => { setApellidos(e.target.value) }} />
                <input required className='inputLogin' type='text' placeholder='Dirección' name='direccion' onChange={(e) => { setDireccion(e.target.value) }} />
                <input required className='inputLogin' type='text' placeholder='Ciudad' name='ciudad' onChange={(e) => { setCiudad(e.target.value) }} />
                <input required className='inputLogin' type='text' placeholder='Provincia' name='provincia' onChange={(e) => { setProvincia(e.target.value) }} />
                <input required className='inputLogin' type='number' placeholder='Código Postal' name='codigoPostal' onChange={(e) => { setCodigoPostal(e.target.value) }} />
                <input required className='inputLogin' type='mail' placeholder='Email' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                <input required className='inputLogin' type='text' placeholder='Usuario' name='usuario' onChange={(e) => { setUsuario(e.target.value) }} />
                <input required className='inputLogin' type='password' placeholder='Contraseña' name='contrasenia' onChange={(e) => { setPassword(e.target.value) }} />
                <button className='btnLogin' onClick={register}>Registrarse</button>
            </div>
            <Link to='/login' className='link'>Iniciar Sesión </Link>
        </div>
    )
}

export default RegisterForm
