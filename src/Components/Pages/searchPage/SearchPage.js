import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useParams } from "react-router-dom";
import Footer from '../../Footer/Footer'
import GoToTop from '../../GoToTop/GoToTop'
import Header from '../../Header/Header'

//Componente que renderizará la página PRODUCTOS
const SearchPage = (props) => {
    const { aBuscar } = useParams()
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Axios.get(`https://artinkoo.herokuapp.com/productos`).then((response) => {
        Axios.get(`http://localhost:8000/buscar/${aBuscar}`).then((response) => {
            setProductos(response.data)
            console.log(response.data);
        })
        // Axios.get(`http://localhost:8000/productos`).then((response) => {
        //     setProductos(response.data)
        // })
    }, [])

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
                                <a href="#"><span>AÑADIR A LA CESTA</span></a>
                            </article>

                        )
                    })
                    :
                    <p>Oh! Lo sentimos, no hay productos relacionados con tu búsqueda.</p>}
            </section>
            <GoToTop />
            <Footer />
        </div>
    )
}

export default SearchPage
