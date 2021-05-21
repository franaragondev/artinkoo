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
                    if (index == 8 || index == 16 || index == 24) {
                        return (
                            <>
                                <div className='publicidad_query'>
                                    <section id="alojuPublicidadQuery">
                                        <picture><img src="../images/alojuhomemobiledesign.jpg" alt="alojú" /></picture>
                                    </section>

                                    <section id="coloreaPublicidadQuery">
                                        <picture><img src="../images/colorea_la_vida.jpg" alt="colorea_la_vida" /></picture>
                                    </section>
                                </div>
                                <section id="alojuPublicidad">
                                    <picture><img src="../images/alojuhomemobiledesign.jpg" alt="alojú" /></picture>
                                </section>
                                <article>
                                    <a href="#">
                                        <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                                    </a>
                                    <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                                    <a href="#"><span>AÑADIR A LA CESTA</span></a>
                                </article>
                            </>
                        )
                    }
                    return (
                        <article>
                            <a href="#">
                                <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                            </a>
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
