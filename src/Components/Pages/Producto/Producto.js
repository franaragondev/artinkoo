import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

//Componente que renderizará la página para ver un producto
const Producto = (props) => {
    const [productosMasVendidos, setProductosMasVendidos] = useState([]);

    useEffect(() => {
        Axios.get(`https://artinkoo.herokuapp.com/masVendidos`).then((response) => {
            setProductosMasVendidos(response.data)
        })
    }, [])

    return (
        <div>
            HOLA
        </div>
    )
}

export default Producto
