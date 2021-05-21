import React, { Component, useState, useEffect } from 'react'
import Header from '../Header/Header'
import Carousel from '../Carousel/Carousel'
import ProductosHome from '../Pages/ProductosHome/ProductosHome'

//Componente que renderizará el HOME de la aplicación
const Home = (props) => {
    return (
        <div>
            <Header />
            <Carousel />
            <ProductosHome />
        </div>
    )
}

export default Home
