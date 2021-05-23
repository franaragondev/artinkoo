import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

//Componente que renderizará los productos situados en el HOME
const ProductosHome = (props) => {
    const [productosMasVendidos, setProductosMasVendidos] = useState([]);

    useEffect(() => {
        Axios.get(`https://artinkoo.herokuapp.com/masVendidos`).then((response) => {
            setProductosMasVendidos(response.data)
        })
    }, [])

    return (
        <div>
            <section id="masVendidos">
                <div id="tituloVendidos">
                    <hr />
                    <h2 className='tituloPagina'>LO MÁS VENDIDO</h2>
                    <hr />
                </div>
                {productosMasVendidos.map((producto, index) => {
                    if (index == 8) {
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
            <button id="mostrarMasVendidos">MOSTRAR MÁS</button>
        </div>
    )
}

export default ProductosHome
