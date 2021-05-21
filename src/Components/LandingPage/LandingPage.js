import React, { Component, useState, useEffect } from 'react'
import Home from '../Home/Home'

//Componente que renderizará la imagen de la primera carga de la web
const LandingPage = (props) => {
    const [video, setVideo] = useState(true)

    const showImage = () => {
        setTimeout(() => {
            setVideo(false)
        }, 3000);
    }

    if (video) {
        return (
            <div className='contenedorImagen'>
                <picture>
                    {showImage()}
                    <img className='imagenInicial' src='../images/ojocamaleon.png' alt='Imagen inicial'></img>
                </picture>
                {/* <video muted preload='auto' className='video' autoPlay playsInline>
                    <source src="../images/intro.mp4" type="video/mp4" />
                    {showMap()}
                    <source src="../images/intro11.webm" type="video/webm" />
                </video> */}
            </div>
        )
    } else {
        return (
            <div>
                <Home />
            </div>
        )
    }

}

export default LandingPage
