import React, { Component, useState, useEffect } from 'react'
import Header from '../Header/Header'
import Carousel from '../Carousel/Carousel'

//Componente que renderizará el video de la primera carga
const Home = (props) => {
    return (
        <div>
            <Header />
            <Carousel/>
        </div>
    )
}

export default Home
