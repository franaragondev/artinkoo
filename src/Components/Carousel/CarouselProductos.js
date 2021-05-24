import React, { Component, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CarouselComponent from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'

//Componente que renderizará el carrusel
const CarouselProductos = (props) => {
    return (
        <div>
            <div className='carousel'>
                <CarouselComponent>
                    <CarouselComponent.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="../images/carousel1(productos).jpg"
                            alt='ropa en suelo'
                        />
                    </CarouselComponent.Item>
                    <CarouselComponent.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="../images/carousel2(productos).jpg"
                            alt="ropa en perchas"
                        />
                    </CarouselComponent.Item>
                    <CarouselComponent.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="../images/carousel3(productos).jpg"
                            alt="sombra en ropa"
                        />
                    </CarouselComponent.Item>
                </CarouselComponent>
            </div>
            {/* <div className='imagenFija'>
                <img
                    className="d-block w-100"
                    src="../images/carousel1.jpg"
                    alt='artinkoo fija'
                />
            </div> */}
        </div>
    )
}

export default CarouselProductos
