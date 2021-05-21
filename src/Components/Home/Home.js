import React, { Component, useState, useEffect } from 'react'
import Header from '../Header/Header'
import Carousel from '../Carousel/Carousel'
import ProductosHome from '../Pages/ProductosHome/ProductosHome'
import Footer from '../Footer/Footer'

//Componente que renderizará el HOME de la aplicación
const Home = (props) => {
    return (
        <div>
            <Header />
            <Carousel />
            <ProductosHome />
            <Footer />
        </div>
    )
}

export default Home
