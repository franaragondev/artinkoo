import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CarouselComponent from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

//Componente que renderizará el video de la primera carga
const Carousel = (props) => {
    return (
        <div className='carousel'>
            <CarouselComponent>
                <CarouselComponent.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg"
                        alt="First slide"
                    />
                </CarouselComponent.Item>
                <CarouselComponent.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg"
                        alt="Second slide"
                    />
                </CarouselComponent.Item>
                <CarouselComponent.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://www.40defiebre.com/wp-content/uploads/2015/10/imagenes.png"
                        alt="Third slide"
                    />
                </CarouselComponent.Item>
            </CarouselComponent>
        </div>
    )
}

export default Carousel
