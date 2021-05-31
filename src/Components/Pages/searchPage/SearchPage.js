import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useParams } from "react-router-dom";
import Footer from '../../Footer/Footer'
import GoToTop from '../../GoToTop/GoToTop'
import Header from '../../Header/Header'
import Cookies from 'universal-cookie'
import swal from 'sweetalert';

//Componente que renderizará la página PRODUCTOS
const SearchPage = (props) => {
    const { aBuscar } = useParams()
    const [productos, setProductos] = useState([]);
    const [buscada, setBuscada] = useState(aBuscar)
    const cookies = new Cookies()

    if (buscada != aBuscar) {
        Axios.get(`https://artinkoo.herokuapp.com/buscar/${aBuscar}`).then((response) => {
            // Axios.get(`http://localhost:8000/buscar/${aBuscar}`).then((response) => {
            setProductos(response.data)
            setBuscada(aBuscar)
            console.log(response.data);
        })
    }

    useEffect(() => {
        Axios.get(`https://artinkoo.herokuapp.com/buscar/${aBuscar}`).then((response) => {
            // Axios.get(`http://localhost:8000/buscar/${aBuscar}`).then((response) => {
            setProductos(response.data)
            console.log(response.data);
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
            <Header />
            <img className='imagenLegales' alt='busqueda' src='../images/pexels-pixabay-268460.jpg'></img>
            <section id="masVendidos">
                <div id="tituloVendidos">
                    <hr />
                    <h2 className='tituloPagina'>COINCIDENCIAS CON TU BÚSQUEDA</h2>
                    <hr />
                </div>
                {productos.length > 0 ?
                    productos.map((producto, index) => {
                        return (
                            <article>
                                <Link to={`/producto/${producto.idCategoria}/${producto.idProducto}`}>
                                    <picture><img src={'../images/productos/' + producto.idProducto + '.jpg'} alt={'Imagen producto ' + producto.idProducto} /></picture>
                                </Link>
                                <h4 className='nombreProducto'>{producto.nombre} | {producto.precio}€</h4>
                                <span onClick={() => añadirCesta(producto.idProducto)}>AÑADIR A LA CESTA</span>
                            </article>

                        )
                    })
                    :
                    <div className='busquedaVacia'>
                        <p className='mensajeBusqueda'>Oh! Lo sentimos, no hay productos relacionados con tu búsqueda.</p>
                    </div>
                }
            </section>
            <GoToTop />
            <Footer />
        </div>
    )
}

export default SearchPage
