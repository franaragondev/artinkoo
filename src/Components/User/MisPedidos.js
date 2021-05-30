import React, { Component, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Form } from 'reactstrap'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';

//Componente que renderizará el video de la primera carga
const MisPedidos = (props) => {
    const { id } = useParams()
    const cookies = new Cookies()
    const [listaPedidos, setListaPedidos] = useState([]);

    useEffect(() => {
        Axios.get(`https://artinkoo.herokuapp.com/misPedidos/${cookies.get('idUsuario')}`).then((response) => {
            setListaPedidos(response.data)
            console.log(response);
        })
    }, [])
    console.log(listaPedidos);
    if (listaPedidos.length > 0) {
        return (
            <div className='login_container'>
                <Link to='/home'>
                    <picture>
                        <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
                    </picture>
                </Link>
                <h2 className='titulo'>MIS PEDIDOS</h2>
                <div className='misPedidosContainer'>
                    {
                        listaPedidos.map((pedido, index) => {
                            return (
                                <div className='misPedidos'>
                                    <p><span className='columnaDatosPersonales'>Identificador Pedido: </span>{pedido.idPedido}.</p>
                                    <p><span className='columnaDatosPersonales'>Fecha: </span>{pedido.fecha.slice(0, 10)}.</p>
                                    <p><span className='columnaDatosPersonales'>Importe: </span>{pedido.importe}€</p>
                                    <p><span className='columnaDatosPersonales'>Estado: </span>{pedido.estado}.</p>
                                </div>
                            )
                        })
                    }
                </div>
                <Link className='linkMisPedidos' to='/login'>
                    Volver al Panel de Usuario
                        </Link>
            </div>
        )
    } else {
        return (
            <div className='login_container'>
                <Link to='/home'>
                    <picture>
                        <img alt='logotipo' id='logotipo_login' src='../images/logotipo_en_color.png'></img>
                    </picture>
                </Link>
                <div className='datosPersonales'>
                    <h2>MIS PEDIDOS</h2>
                    <h4 className='mensajeMisPedidos'>Actualmente no cuentas con ningún pedido en el historial.</h4>
                    <Link className='linkDatosPersonales' to='/login'>
                        Volver al Panel de Usuario
                        </Link>
                </div>
            </div>
        )
    }
}

export default MisPedidos
