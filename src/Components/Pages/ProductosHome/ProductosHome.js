import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

//Componente que renderizará los productos situados en el HOME
const ProductosHome = (props) => {
    const [productosMasVendidos, setProductosMasVendidos] = useState([]);

    useEffect(() => {
        Axios.get(`https://artinkoo.herokuapp.com/masVendidos`).then((response) => {
            setProductosMasVendidos(response.data)
            console.log(response);
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
                    return (
                        <article>
                            <a href="#">
                                <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                            </a>
                            <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                            <a href="#"><span>AÑADIR A LA CESTA</span><i class="fas fa-shopping-cart"></i></a>
                        </article>
                    )
                })}
                <button id="mostrarMasVendidos">MOSTRAR MÁS</button>
            </section>
        </div>
    )
}

export default ProductosHome
