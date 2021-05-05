import React, { Component, useState, useEffect } from 'react'

//Componente que renderizará el video de la primera carga
const Home = (props) => {
    return (
        <div>
            <video muted preload='auto' className='video' autoPlay playsInline>
                <source src="../images/intro.mp4" type="video/mp4" />
                <source src="../images/intro11.webm" type="video/webm" />
                <img src="imagen.png" alt="Video no soportado" />
            </video>
        </div>
    )
}

export default Home
