import React, { Component, useState, useEffect } from 'react'

//Componente que renderizará el video de la primera carga
const Header = (props) => {
    return (
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
                        <img alt="lupa" src="../images/search_magnifying_glass_icon_149392.svg" />
                        <input type="text" id="buscar" name="buscar" placeholder="Encuentra lo que buscas" />
                        <hr />
                    </li>
                    <li> <a href="pages/productos.html">Productos</a></li>
                    <li> <a href="pages/personalizacion.html">Personalización</a></li>
                    <li> <a href="pages/aloju.html">ALOJÚ</a></li>
                    <li> <a href="pages/contacto.html">Contáctanos</a></li>
                </ul>
            </div>

            <div id="logoCabecera">
                <a href="index.html"><img alt="logoColor" src="../images/logotipo_en_color.png" /></a>
            </div>

            <div id='menu_query'>
                <p id='productos_menu_query'><a href="#">Productos</a></p>
                <p id='personalizacion_menu_query'><a href="#">Personalización</a></p>
                <p id='aloju_menu_query'><a href="#">ALOJÚ</a></p>
                <p id='contactanos_menu_query'><a href="#">Contáctanos</a></p>
            </div>

            <div id="derecha">
                <img id='icon_user' alt="icono_user" src="../images/icon_user.svg" />
                <input id="idioma" type="checkbox" />
                <label for="idioma">
                    <img alt="globoIdioma" src="../images/-language_89801.svg" />
                    <img alt="idiomaIngles" id="english" src="../images/icons8-gran-bretana-48.png" />
                </label>

                <div id="bolsaCompra">
                    <a href="#"><img id='icono_bolsaCompra' alt="bolsaCompra"
                        src="../images/shopping-bag_icon-icons.com_69305.svg" /></a>
                    <div>
                        <p></p>
                    </div>
                </div>
                <div id='menu_oculto_bolsa'>
                    <div id='cerrar_menu_bolsa'>
                        <picture>
                            <img id='icono_cerrar_bolsa' alt='cerrar' src='../images/cross-symbol_icon-icons.com_74149.png' />
                        </picture>
                        <p id='cerrar_bolsa'>CERRAR</p>
                    </div>
                    <div id='contenido_menu_compra'>
                        <p>CARRITO DE COMPRA</p>
                        <hr />
                        <div id='contenido_compra'>
                            <picture>
                                <img src="images/nodisponible.png" alt="Imagen No Disponible" />
                            </picture>
                            <p id='nombre_producto'>Nombre producto</p>
                            <p id='precio_producto'>1 x 26.65€</p>
                            <picture>
                                <img id='eliminar_producto' alt='eliminar_producto'
                                    src='../images/cross-symbol_icon-icons.com_74149.png' />
                            </picture>
                        </div>
                        <hr />
                        <button id='comprar_desde_menu'>COMPRAR</button>
                        <button id='ver_carrito'>VER CARRITO</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
