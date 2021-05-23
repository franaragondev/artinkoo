import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Footer from '../../Footer/Footer'
import GoToTop from '../../GoToTop/GoToTop'
import Header from '../../Header/Header'
import Carousel from '../../Carousel/Carousel'

//Componente que renderizará la página PRODUCTOS
const Productos = (props) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        Axios.get(`https://artinkoo.herokuapp.com/productos`).then((response) => {
            setProductos(response.data)
        })
    }, [])

    return (
        <div>
            <Header />
            <Carousel />
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
                                    <Link to={`/producto/${producto.idProducto}`}>
                                        <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                                    </Link>
                                    <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                                    <a href="#"><span>AÑADIR A LA CESTA</span></a>
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
                                    <Link to={`/producto/${producto.idProducto}`}>
                                        <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                                    </Link>
                                    <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                                    <a href="#"><span>AÑADIR A LA CESTA</span></a>
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
                                    <Link to={`/producto/${producto.idProducto}`}>
                                        <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                                    </Link>
                                    <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                                    <a href="#"><span>AÑADIR A LA CESTA</span></a>
                                </article>
                            </>
                        )
                    }
                    return (

                        <article>
                            <Link to={`/producto/${producto.idProducto}`}>
                                <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                            </Link>
                            <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                            <a href="#"><span>AÑADIR A LA CESTA</span></a>
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
