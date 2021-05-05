import React, { Component, useState, useEffect } from 'react'

//Componente que renderizará el video de la primera carga
const LandingPage = (props) => {
    const [video, setVideo] = useState(true)

    const showMap = () => {
        setTimeout(() => {
            setVideo(false)
        }, 5000);
    }

    if (video) {
        return (
            <div>
                <video muted preload='auto' className='video' autoPlay playsInline>
                    <source src="../images/intro.mp4" type="video/mp4" />
                    {showMap()}
                    <source src="../images/intro11.webm" type="video/webm" />
                </video>
            </div>
        )
    } else {
        return (
            <div>
                PAGINA
            </div>
        )
    }

}

export default LandingPage
