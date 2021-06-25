import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Axios from 'axios'
import EnlaceServer from '../EnlaceServer'
import swal from 'sweetalert';

//Componente que renderizará la cabecera de la web
const Header = (props) => {
    const [aBuscar, setABuscar] = useState(' ')
    const [productos, setProductos] = useState([]);
    const cookies = new Cookies()
    const [enlace, setEnlace] = useState(EnlaceServer)

    useEffect(() => {
        Axios.get(enlace + `/verCesta/${cookies.get('idUsuario')}`).then((response) => {
            // Axios.get(`http://localhost:8000/verCesta/${cookies.get('idUsuario')}`).then((response) => {
            setProductos(response.data)
        })
    }, [])

    const aplicacion = () => {
        swal({
            title: "Oh! Funcion no disponible.",
            text: 'Lo sentimos pero esta opción no está disponible en estos momentos.',
            icon: "error",
            button: "Ok!",
        })
    }

    const mostrarCesta = () => {
        //CARRITO VACÍO
        if (productos.length == 0) {
            return (
                <div id='contenido_menu_compra'>
                    <p>CARRITO DE COMPRA</p>
                    <hr />
                    <p id='carritoVacio'>Tu carrito está vacío pero no te preocupes, ¡tenemos decenas de productos esperándote!.</p>
                    <Link to='/productos'><button id='seguirComprando'>SEGUIR COMPRANDO</button></Link>
                </div>
            )
            //CARRITO CON PRODUCTOS
        } else {
            return (
                <div id='contenido_menu_compra'>
                    <p>CARRITO DE COMPRA</p>
                    <hr />
                    <div id='contenido_compra'>
                        {
                            productos.map((producto, index) => {
                                return (
                                    <picture>
                                        <img src={"https://proyecto-final-fran-aragon.netlify.app/images/productos/" + + producto.idProductoCesta + ".jpg"} alt={"imagen cesta producto " + producto.idProductoCesta} />
                                    </picture>
                                )
                            })
                        }
                    </div>
                    <hr />
                    <Link to='/carrito'><button id='ver_carrito'>VER CARRITO</button></Link>
                </div>
            )
        }
    }

    return (
        <div>
            <header>
                <div id="menu">
                    <input id="hamburguer-icon" type="checkbox" />
                    <label for="hamburguer-icon">
                        <span className="hamburguer-line"></span>
                        <span className="hamburguer-line"></span>
                        <span className="hamburguer-line"></span>
                    </label>
                    <ul id="menuOculto">
                        <li>
                            <div className='buscador'>
                                {/* <img alt="lupa" src="../images/search_magnifying_glass_icon_149392.svg" /> */}
                                <input type="text" id="buscar" name="buscar" placeholder="Encuentra lo que buscas" onChange={(e) => { setABuscar(e.target.value) }} />
                                <Link to={'/search/ ' + aBuscar}><button id='btnBuscar'>Buscar</button></Link>
                            </div>
                            <hr />
                        </li>
                        <li> <Link to='/productos'>Productos</Link></li>
                        <li> <Link to='/aloju'>ALOJÚ</Link></li>
                        <li> <Link to='/contactanos'>Contáctanos</Link></li>
                        <li> <a onClick={() => aplicacion()}>Descarga la App</a></li>
                    </ul>
                </div>

                <div id="logoCabecera">
                    <Link to='/home'>
                        <img alt="logoColor" src="https://proyecto-final-fran-aragon.netlify.app/images/logotipo_en_color.png" />
                    </Link>
                </div>

                <div id='menu_query'>
                    <p id='productos_menu_query'><Link to='/productos'>Productos</Link></p>
                    <p id='personalizacion_menu_query'><Link to='/aloju'>ALOJÚ</Link></p>
                    <p id='aloju_menu_query'><Link to='/contactanos'>Contáctanos</Link></p>
                    <p id='contactanos_menu_query'><a onClick={() => aplicacion()}>Descarga la App</a></p>
                </div>

                <div id="derecha">
                    <Link to='/login'>
                        <img id='icon_user' alt="icono_user" src="https://proyecto-final-fran-aragon.netlify.app/images/icon_user.svg" />
                    </Link>
                    <input id="idioma" type="checkbox" />
                    <label id='idiomaAnimacion' for="idioma">
                        <img alt="globoIdioma" src="../images/-language_89801.svg" />
                        <img alt="idiomaIngles" id="english" src="../images/icons8-gran-bretana-48.png" />
                    </label>

                    <input id="input_carrito" type="checkbox" />
                    <label id='animacionCarrito' for='input_carrito'>
                        <Link to='/carrito'><img id='icono_bolsaCompra' alt="bolsaCompra"
                            src="https://proyecto-final-fran-aragon.netlify.app/images/shopping-bag_icon-icons.com_69305.svg" /></Link>
                    </label>

                    {/* <input id="cerrar_carrito" type="checkbox" />
                    <label id='animacionbolsa' for='cerrar_carrito'><p id='cerrar_bolsa'>CERRAR</p></label>
                    <p id='cerrar_bolsa2'>CERRAR</p> */}


                    <div id='menu_oculto_bolsa'>
                        {/* <div id='cerrar_menu_bolsa'>
                            <picture>
                                <img id='icono_cerrar_bolsa' alt='cerrar' src='../images/cross-symbol_icon-icons.com_74149.png' />
                            </picture>
                        </div> */}
                        {cookies.get('nombre')
                            ?
                            mostrarCesta()
                            :
                            <div id='contenido_menu_compra'>
                                <p>CARRITO DE COMPRA</p>
                                <hr />
                                <p id='carritoVacio'>Oh! Parece que no has iniciado sesión. ¡Loguéate y disfruta de todas las ventajas!.</p>
                                <Link to='/login'><button id='seguirComprando'>INICIAR SESIÓN</button></Link>
                            </div>
                        }
                    </div>
                </div>
            </header>
            <div className='buscadorQuery'>
                {/* <img alt="lupa" src="../images/search_magnifying_glass_icon_149392.svg" /> */}
                <input type="text" id="buscar" name="buscar" placeholder="Encuentra lo que buscas" onChange={(e) => { setABuscar(e.target.value) }} />
                <Link to={'/search/ ' + aBuscar}><button id='btnBuscar'>Buscar</button></Link>
            </div>
        </div >
    )
}

export default Header
