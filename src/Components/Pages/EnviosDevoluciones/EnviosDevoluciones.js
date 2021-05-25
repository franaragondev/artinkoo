import React, { Component, useState, useEffect, Fragment } from 'react'
import { Form } from 'reactstrap'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';
import HeaderPages from '../../Header/HeaderPages'
import Footer from '../../Footer/Footer'

//Componente que renderizará la página de Envios y Devoluciones
const EnviosDevoluciones = (props) => {

    return (
        <div className='legales'>
            <HeaderPages />
            <h2 className='tituloLegales'>ENVÍOS Y DEVOLUCIONES</h2>
            <div className='paginasFooter'>
                <img className='imagenLegales' alt='quienes_somos' src='../images/pexels-karolina-grabowska-4498124.jpg'></img>
            </div>
            <div className='parrafo_paginas_legales'>
                <div>
                    <p>Bienvenido a nuestra web! Esperamos que disfrutes mucho de tu compra.</p>
                    <p>Todas las compras realizadas se envían desde España a través de una empresa de transporte.</p>
                    <p>Los envíos tienen un tiempo de preparación de 1-2 días laborables tras hacerse efectivo el pago. A partir de ahí comienzan a contar 72hs de plazo en el que la empresa de transporte te entregará tu pedido si es para la Península, ó 10-12 días laborables para el resto de destinos. No podemos confirmar un día exacto de entrega pero intentaremos ajustarnos al máximo al plazo citado.</p>
                    <p>Cuando hagas tu pedido, revisa bien tus datos de envío. Si hay un error y no puede hacerse la entrega el pedido permanece 15 días en oficina y después el paquete vuelve a nuestra tienda física. En este caso tendrás que hacerte cargo del importe del nuevo envío.</p>
                    <p>El coste del envío dependerá del país de residencia. Te informaremos del coste exacto en el último paso de tu compra, cuando tengas que introducir tu dirección.</p>
                    <h3>DEVOLUCIONES</h3>
                    <p>Queremos que estés muy contento con tu compra, pero en caso de que no sea así, te ofrecemos la posibilidad de un cambio o devolución en forma de VALE de compra, en un plazo de 10 días desde su entrega.</p>
                    <p>Los gastos de envío, siempre que no sean por error o mercancía defectuosa, correrán a cargo del cliente. No aceptamos envíos a portes debidos. Por favor, envía tus devoluciones a través de una compañía de envíos seria. Vaidhé no se responsabiliza por daños, pérdidas o robos mediante el transporte de éstas.</p>
                    <p>Cuando comprobemos que el producto que quieres devolver está en perfectas condiciones, tramitaremos el cambio o envío del Vale.</p>
                    <p>Los cambios podrán hacerse por un producto de igual o mayor valor. Los portes del nuevo envío corren a cargo del cliente. En caso de que el producto elegido sea de mayor valor, se deberán abonar la diferencia.</p>
                    <p>En caso de devolución, se abonará el precio del producto (sin los gastos de envío) en forma de Vale sin caducidad y en el plazo de 5 días hábiles desde que llegue a nuestra tienda.</p>
                    <h3>MODIFICACIÓN DE LAS CONDICIONES DE VENTA</h3>
                    <p>Estas condiciones podrán ser modificadas en cualquier momento, atendiendo a la evolución de esta web y los contenidos en ella ofrecidos.</p>
                    <h3>ACEPTACIÓN DE LAS CONDICIONES DE VENTA</h3>
                    <p>La adquisición de cualquier producto ofrecido en esta web, supone el conocimiento y aceptación de las condiciones legales –condiciones de venta y aviso legal- que se detallan en el siguiente apartado.</p>
                    <p>&nbsp;</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EnviosDevoluciones
