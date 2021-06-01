import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import Cookies from 'universal-cookie'
import swal from 'sweetalert';
import Footer from '../../Footer/Footer'
import GoToTop from '../../GoToTop/GoToTop'
import Header from '../../Header/HeaderCarrito'
import useStateRef from 'react-usestateref'

//Componente que renderizará la página CARRITO
const Carrito = (props) => {
    const [productos, setProductos] = useState([]);
    const [precioTotal, setPrecioTotal, precioTotalRef] = useStateRef(0)
    const [contador, setContador] = useState(0)
    const [comentarios, setComentarios] = useState('')
    const cookies = new Cookies()
    cookies.remove('codigoUsado', { path: '/' })
    cookies.remove('precioTotalDescuento', { path: '/' })

    useEffect(() => {
        Axios.get(`https://artinkoo.herokuapp.com/verCesta/${cookies.get('idUsuario')}`).then((response) => {
            // Axios.get(`http://localhost:8000/verCesta/${cookies.get('idUsuario')}`).then((response) => {
            setProductos(response.data)
        })
    }, [])

    const calcularPrecioTotal = () => {
        if (contador != productos.length) {
            setContador(contador + productos.length)
            for (let index = 0; index < productos.length; index++) {
                setPrecioTotal((precioTotalRef.current + productos[index].precio))
            }
        }
    }

    calcularPrecioTotal()

    const borrarProductoCesta = (idProducto) => {
        console.log('borrado');
        Axios.post(`https://artinkoo.herokuapp.com/borrarProductoCesta`, { idUsuario: cookies.get('idUsuario'), idProducto: idProducto }).then((response) => {
            // Axios.post(`http://localhost:8000/borrarProductoCesta`, { idUsuario: cookies.get('idUsuario'), idProducto: idProducto }).then((response) => {
            if (response.data.affectedRows == 1) {
                swal({
                    title: "¡Eliminado Satisfactorio!",
                    text: 'Producto eliminado de la cesta correctamente.',
                    icon: "success",
                    button: "Ok!",
                }).then(function () {
                    // window.location.href = 'http://localhost:3000/carrito'
                    window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/carrito'
                })
            }
        })
    }

    const anadirStock = (idProducto) => {
        console.log('añadido');
        Axios.post(`https://artinkoo.herokuapp.com/anadirStock`, { idProducto: idProducto }).then((response) => {
            // Axios.post(`http://localhost:8000/anadirStock`, { idProducto: idProducto }).then((response) => {
            if (response.data.affectedRows == 1) {
                borrarProductoCesta(idProducto)
            }
        })
    }

    if (cookies.get('nombre')) {
        return (
            <div>
                <Header />
                <div id='titulo_carrito'>
                    <p id='mi_carrito'>MI CARRITO</p>
                    <Link to='/productos'><p id='continuar_comprando'>Continuar Comprando</p></Link>
                </div>

                <div id='productos_cesta'>
                    <p>PRODUCTOS</p>
                </div>

                <div id='datos_cesta'>
                    {
                        productos.map((producto, index) => {
                            return (
                                <div>
                                    <div>
                                        <Link to={`/producto/${producto.idCategoria}/${producto.idProducto}`}>
                                            <picture>
                                                <img className='imagenProductoCesta' src={"https://proyecto-final-fran-aragon.netlify.app/images/productos/" + + producto.idProductoCesta + ".jpg"} alt={"imagen cesta producto " + producto.idProductoCesta} />
                                            </picture>
                                        </Link>
                                    </div>
                                    <div id='datos_producto_cesta'>
                                        <p>{producto.nombre}</p>
                                        <p id='precio_producto_cesta'>{producto.precio}€</p>
                                    </div>
                                    <div>
                                        <picture>
                                            <img onClick={() => anadirStock(producto.idProducto)} id='borrar_producto' alt='eliminar_producto' src='../images/cross-symbol_icon-icons.com_74149.png' />
                                        </picture>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div id='total_carrito'>
                    <p id='total_texto'>TOTAL</p>
                    <p id='precio_total'>{precioTotal}€</p>
                    {cookies.set('precioTotal', (precioTotal), { path: '/' })}
                </div>

                {/* <hr id='carrito' />
    
                <p id='comentarios_adicionales'>Comentarios adicionales:</p>
                <textarea id='textarea_comentarios_adicionales' onChange={(e) => { setComentarios(e.target.value) }}></textarea> */}

                <Link to='/datosEnvio'><button id='comprar_desde_cesta'>COMPRAR</button></Link>
                <GoToTop />
                <Footer />
            </div>
        )
    } else {
        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/login'
        // window.location.href = 'http://localhost:3000/home'
    }


}

export default Carrito
