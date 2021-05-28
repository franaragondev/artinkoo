import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import swal from 'sweetalert';

//Componente que renderizará los productos situados en el HOME
const ProductosHome = (props) => {
    const [productosMasVendidos, setProductosMasVendidos] = useState([]);
    const cookies = new Cookies()

    useEffect(() => {
        Axios.get(`https://artinkoo.herokuapp.com/masVendidos`).then((response) => {
            setProductosMasVendidos(response.data)
        })
    }, [])

    const añadirCesta = (idProducto) => {
        if (cookies.get('idUsuario')) {
            Axios.post(`https://artinkoo.herokuapp.com/anadirCesta`, { idUsuario: cookies.get('idUsuario'), idProducto: idProducto }).then((response) => {
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
        } else {
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
                                    <Link to={`/producto/${producto.idCategoria}/${producto.idProducto}`}>
                                        <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                                    </Link>
                                    <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                                    <span onClick={() => añadirCesta(producto.idProducto)}>AÑADIR A LA CESTA</span>
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
                            <span onClick={() => añadirCesta(producto.idProducto)}>AÑADIR A LA CESTA</span>
                        </article>
                    )
                })}
            </section>
            <Link to='/productos'><button id="mostrarMasVendidos">MOSTRAR MÁS</button></Link>
        </div>
    )
}

export default ProductosHome
