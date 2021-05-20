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
                        src="../images/carousel1.jpg"
                        alt="First slide"
                    />
                </CarouselComponent.Item>
                <CarouselComponent.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="../images/carousel2(PromoHalloween).jpg"
                        alt="Second slide"
                    />
                </CarouselComponent.Item>
                <CarouselComponent.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="../images/carousel3(ALOJÚ)V.2.jpg"
                        alt="Third slide"
                    />
                </CarouselComponent.Item>
            </CarouselComponent>
        </div>
    )
}

export default Carousel
