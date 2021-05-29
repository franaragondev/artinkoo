import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Axios from 'axios'

//Componente que renderizará la cabecera de la web
const HeaderCarrito = (props) => {

    return (
        <div>
            <header>
                <div id="logoCabeceraCarrito">
                    <Link to='/home'>
                        <img alt="logoColor" src="https://proyecto-final-fran-aragon.netlify.app/images/logotipo_en_color.png" />
                    </Link>
                </div>

                <div id="derecha">
                    <Link to='/login'>
                        <img id='icon_userCarrito' alt="icono_user" src="https://proyecto-final-fran-aragon.netlify.app/images/icon_user.svg" />
                    </Link>
                    <input id="idioma" type="checkbox" />
                    <label id='idiomaAnimacion' for="idioma">
                        <img alt="globoIdioma" src="../images/-language_89801.svg" />
                        <img alt="idiomaIngles" id="english" src="../images/icons8-gran-bretana-48.png" />
                    </label>
                </div>
            </header>
        </div >
    )
}

export default HeaderCarrito
