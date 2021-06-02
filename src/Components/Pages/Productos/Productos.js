import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import swal from 'sweetalert';
import Footer from '../../Footer/Footer'
import GoToTop from '../../GoToTop/GoToTop'
import Header from '../../Header/Header'
import CarouselProductos from '../../Carousel/CarouselProductos'
import EnlaceServer from '../../EnlaceServer'

//Componente que renderizará la página PRODUCTOS
const Productos = (props) => {
    const [productos, setProductos] = useState([]);
    const cookies = new Cookies()
    const [enlace, setEnlace] = useState(EnlaceServer)

    const añadirCesta = (idProducto) => {
        if (cookies.get('idUsuario')) {
            Axios.post(enlace + `/anadirCesta`, { idUsuario: cookies.get('idUsuario'), idProducto: idProducto }).then((response) => {
                // Axios.post(`http://localhost:8000/anadirCesta`, { idUsuario: cookies.get('idUsuario'), idProducto: idProducto }).then((response) => {
                if (response.data.affectedRows == 1) {
                    swal({
                        title: "¡Tienes un producto nuevo esperándote!",
                        text: 'Producto añadido a la cesta correctamente.',
                        icon: "success",
                        button: "Ok!",
                    }).then(function () {
                        // window.location.href = 'http://localhost:3000/home'
                        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/home'
                    })
                }
            })
        }
        // else {
        //     swal({
        //         title: "Oh! Parece que no estás logueado.",
        //         text: 'Por favor, loguéate o registrate antes de añadir productos a tu cesta.',
        //         icon: "error",
        //         button: "Ok!",
        //     }).then(function () {
        //         // window.location.href = 'http://localhost:3000/login'
        //         window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
        //     })
        // }
    }

    const borrarStock = (idProducto) => {
        console.log('borrando');
        if (cookies.get('idUsuario')) {
            Axios.post(`https://artinkoo.herokuapp.com/borrarStock`, { idProducto: idProducto }).then((response) => {
                // Axios.post(`http://localhost:8000/borrarStock`, { idUsuario: cookies.get('idUsuario'), idProducto: idProducto }).then((response) => {
                if (response.data.affectedRows == 1) {
                    añadirCesta(idProducto)
                }
            })
        }
        else {
            swal({
                title: "Oh! Parece que no estás logueado.",
                text: 'Por favor, loguéate o registrate antes de añadir productos a tu cesta.',
                icon: "error",
                button: "Ok!",
            }).then(function () {
                // window.location.href = 'http://localhost:3000/login'
                window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
            })
        }
    }

    useEffect(() => {
        Axios.get(enlace + `/productos`).then((response) => {
            setProductos(response.data)
        })
        // Axios.get(`http://localhost:8000/productos`).then((response) => {
        //     setProductos(response.data)
        // })
    }, [])

    return (
        <div>
            <Header />
            <CarouselProductos />
            <section id="masVendidos">
                <div id="tituloVendidos">
                    <hr />
                    <h2 className='tituloPagina'>PRODUCTOS</h2>
                    <hr />
                </div>
                {productos.map((producto, index) => {
                    if (index == 8) {
                        return (
                            <>
                                <div className='publicidad_query'>
                                    <section id="alojuPublicidadQuery">
                                        <picture><img src="../images/publiDeporteProductos.jpg" alt="publi ropa deporte" /></picture>
                                    </section>

                                    <section id="coloreaPublicidadQuery">
                                        <picture><img src="../images/pexels-alina-vilchenko-1353503.jpg" alt="ropa" /></picture>
                                    </section>
                                </div>
                                <section id="alojuPublicidad">
                                    <picture><img src="../images/publiDeporteProductos.jpg" alt="publi ropa deporte" /></picture>
                                </section>

                                <article>
                                    <Link to={`/producto/${producto.idCategoria}/${producto.idProducto}`}>
                                        <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                                    </Link>
                                    <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                                    {
                                        producto.stock == 0
                                            ?
                                            <span>NO DISPONIBLE</span>
                                            :
                                            <span onClick={() => borrarStock(producto.idProducto)}>AÑADIR A LA CESTA</span>
                                    }

                                </article>
                            </>
                        )
                    } else if (index == 16) {
                        return (
                            <>
                                <div className='publicidad_query'>
                                    <section id="alojuPublicidadQuery">
                                        <picture><img src="../images/pexels-oliver-sjöström-1122413.jpg" alt="surfero" /></picture>
                                    </section>

                                    <section id="coloreaPublicidadQuery">
                                        <picture><img src="../images/pexels-robin-1020370.jpg" alt="tienda de ropa" /></picture>
                                    </section>
                                </div>
                                <section id="alojuPublicidad">
                                    <picture><img src="../images/pexels-oliver-sjöström-1122413.jpg" alt="surfero" /></picture>
                                </section>

                                <article>
                                    <Link to={`/producto/${producto.idCategoria}/${producto.idProducto}`}>
                                        <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                                    </Link>
                                    <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                                    {
                                        producto.stock == 0
                                            ?
                                            <span>NO DISPONIBLE</span>
                                            :
                                            <span onClick={() => borrarStock(producto.idProducto)}>AÑADIR A LA CESTA</span>
                                    }
                                </article>
                            </>
                        )
                    } else if (index == 24) {
                        return (
                            <>
                                <div className='publicidad_query'>
                                    <section id="alojuPublicidadQuery">
                                        <picture><img src="../images/pexels-scott-webb-430209.jpg" alt="grafiti muro" /></picture>
                                    </section>

                                    <section id="coloreaPublicidadQuery">
                                        <picture><img src="../images/pexels-𝐕𝐞𝐧𝐮𝐬-𝐇𝐃-𝐌𝐚𝐤𝐞-𝐮𝐩-𝐏𝐞𝐫𝐟𝐮𝐦𝐞-1749452.jpg" alt="pinturas" /></picture>
                                    </section>
                                </div>
                                <section id="alojuPublicidad">
                                    <picture><img src="../images/pexels-scott-webb-430209.jpg" alt="grafiti muro" /></picture>
                                </section>

                                <article>
                                    <Link to={`/producto/${producto.idCategoria}/${producto.idProducto}`}>
                                        <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                                    </Link>
                                    <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                                    {
                                        producto.stock == 0
                                            ?
                                            <span>NO DISPONIBLE</span>
                                            :
                                            <span onClick={() => borrarStock(producto.idProducto)}>AÑADIR A LA CESTA</span>
                                    }
                                </article>
                            </>
                        )
                    }
                    return (

                        <article>
                            <Link to={`/producto/${producto.idCategoria}/${producto.idProducto}`}>
                                <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                            </Link>
                            <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                            {
                                producto.stock == 0
                                    ?
                                    <span>NO DISPONIBLE</span>
                                    :
                                    <span onClick={() => borrarStock(producto.idProducto)}>AÑADIR A LA CESTA</span>
                            }
                        </article>

                    )
                })}
            </section>
            <GoToTop />
            <Footer />
        </div>
    )
}

export default Productos
