import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import Axios from 'axios'
import Header from '../../Header/Header'
import GoToTop from '../../GoToTop/GoToTop'
import Footer from '../../Footer/Footer'

//Componente que renderizará la página para ver un producto
const Producto = (props) => {
    const { idCategoria, idProducto } = useParams()
    const [datosProducto, setDatosProducto] = useState([])
    // const [productosRelacionados, setProductosRelacionados] = useState([])
    // const [categoriaSuperior, setCategoriaSuperior] = useState(parseInt(idCategoria) + 1)
    // const [idProductoNuevo, setIdProductoNuevo] = useState(idProducto)

    // if (categoriaSuperior == 6) {
    //     setCategoriaSuperior(1)
    // }


    useEffect(() => {
        Axios.get(`https://artinkoo.herokuapp.com/mostrarProducto/${idProducto}`).then((response) => {
            setDatosProducto(response.data[0])

        })
        // Axios.get(`http://localhost:8000/mostrarProducto/${idProducto}`).then((response) => {
        //     setDatosProducto(response.data[0])

        // })
        // Axios.get(`https://artinkoo.herokuapp.com/mostrarRelacionados/${categoriaSuperior}/${idProducto}`).then((response) => {
        //     setProductosRelacionados(response.data)
        // })
    }, [])

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
                    <p id='cantidad_producto'>Cantidad:</p>
                    <section id='modificar_cantidad_producto'>
                        <p id='menos'>-</p>
                        <p id='numero'>1</p>
                        <p id='mas'>+</p>
                    </section>

                    <button id='anadir_producto'>Añadir al Carrito</button>

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
