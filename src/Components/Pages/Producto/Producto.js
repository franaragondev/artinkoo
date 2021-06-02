import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import Axios from 'axios'
import Header from '../../Header/Header'
import GoToTop from '../../GoToTop/GoToTop'
import Footer from '../../Footer/Footer'
import Cookies from 'universal-cookie'
import swal from 'sweetalert';
import EnlaceServer from '../../EnlaceServer'

//Componente que renderizará la página para ver un producto
const Producto = (props) => {
    const { idCategoria, idProducto } = useParams()
    const [datosProducto, setDatosProducto] = useState([])
    const cookies = new Cookies()
    const [enlace, setEnlace] = useState(EnlaceServer)
    // const [productosRelacionados, setProductosRelacionados] = useState([])
    // const [categoriaSuperior, setCategoriaSuperior] = useState(parseInt(idCategoria) + 1)
    // const [idProductoNuevo, setIdProductoNuevo] = useState(idProducto)

    // if (categoriaSuperior == 6) {
    //     setCategoriaSuperior(1)
    // }


    useEffect(() => {
        Axios.get(enlace + `/mostrarProducto/${idProducto}`).then((response) => {
            setDatosProducto(response.data[0])

        })
        // Axios.get(`http://localhost:8000/mostrarProducto/${idProducto}`).then((response) => {
        //     setDatosProducto(response.data[0])

        // })
        // Axios.get(`https://artinkoo.herokuapp.com/mostrarRelacionados/${categoriaSuperior}/${idProducto}`).then((response) => {
        //     setProductosRelacionados(response.data)
        // })
    }, [])

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
            Axios.post(enlace + `/borrarStock`, { idProducto: idProducto }).then((response) => {
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

    return (
        <>
            <Header />
            <GoToTop />

            <div id='pagina_producto_query'>

                <div id='carrusel_productos'>
                    <section id='producto'>
                        <picture>
                            <img id='imagen_producto' alt='imagen_producto' src={"../../images/productos/" + idProducto + ".jpg"} />
                        </picture>
                    </section>
                </div>


                <div id='pagina_producto'>
                    <section id='datos_producto'>
                        <p id='nombre_producto'>{datosProducto.nombre}</p>
                        <p id='precio'>{datosProducto.precio}€</p>
                    </section>

                    {
                        datosProducto.stock == 0
                            ?
                            <button id='anadir_producto'>No Disponible</button>
                            :
                            <button onClick={() => borrarStock(datosProducto.idProducto)} id='anadir_producto'>Añadir al Carrito</button>
                    }

                    <section id='descripcion'>
                        <p>Descripción</p>
                        <p>{datosProducto.descripcion}</p>
                    </section>
                </div>

                {/* <div>
                    <p id='productos_relacionados'>PRODUCTOS RELACIONADOS</p>

                    <section id='relacionados'>

                        {
                            productosRelacionados.map((producto, index) => {
                                return (
                                    <div>
                                        <Link to={`/producto/${producto.idCategoria}/${producto.idProducto}`}>
                                            <picture onClick={recargar}> <img id='imagen_producto_relacionado' alt='imagen_producto_relacionado' src={"../../images/productos/" + producto.idProducto + ".jpg"} /> </picture>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                        <img id='imagen_producto_relacionado' alt='imagen_producto_relacionado' src={"../images/productos/" + idProducto + ".jpg"} />

                    </section>
                </div> */}
            </div>
            <Footer />
        </>
    )
}

export default Producto
