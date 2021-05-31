import React, { useState } from "react";
import Cookies from 'universal-cookie'
// import "bootswatch/dist/lux/bootstrap.min.css";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import swal from 'sweetalert';

const stripePromise = loadStripe("pk_test_51Iwsf6HAiPs9nykwHQMsgaa8R6YP4fPUb3AR351RJRc9k1v6QVMQZ2uHBofplBqT4bVBvFzq8p1VJRsdu0E1LpF900SfPMxoQW");
const cookies = new Cookies()

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });
        setLoading(true);

        if (!error) {
            // console.log(paymentMethod)
            const { id } = paymentMethod;
            try {
                if (cookies.get('precioTotalDescuento')) {
                    const { data } = await axios.post(
                        // "http://localhost:8000/pasarela",
                        "https://artinkoo.herokuapp.com/pasarela",
                        {
                            id,
                            amount: ((parseInt(cookies.get('precioTotalDescuento'))) * 100), //cents
                        }
                    );
                    console.log(data);
                    swal({
                        title: "¡Compra Realizada!",
                        text: 'Su compra se ha realizado con éxito, por favor revise su email para más detalles.',
                        icon: "success",
                        button: "Ok!",
                    }).then(function () {
                        // window.location.href = 'http://localhost:3000/home'
                        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/home'
                    })
                    elements.getElement(CardElement).clear();
                } else {
                    const { data } = await axios.post(
                        // "http://localhost:8000/pasarela",
                        "https://artinkoo.herokuapp.com/pasarela",
                        {
                            id,
                            amount: ((parseInt(cookies.get('precioTotal'))) * 100), //cents
                        }
                    );
                    console.log(data);
                    swal({
                        title: "¡Compra Realizada!",
                        text: 'Su compra se ha realizado con éxito, por favor revise su email para más detalles.',
                        icon: "success",
                        button: "Ok!",
                    }).then(function () {
                        // window.location.href = 'http://localhost:3000/home'
                        window.location.href = 'https://proyecto-final-fran-aragon.netlify.app/home'
                    })
                    elements.getElement(CardElement).clear();
                }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    };

    console.log(!stripe || loading);

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            {/* Information */}
            <img
                src="../images/logotipo_en_color.png"
                alt="logotipo artinkoo"
                className="img-fluid"
            />

            <h3 className="text-center my-2">Precio: {parseInt(cookies.get('precioTotal')) + (parseInt(cookies.get('precioTotal') * .10))}€</h3>

            {/* User Card Input */}
            <div className="form-group">
                <CardElement className='form-control' />
            </div>

            <button disabled={!stripe} className="btn btn-success">
                {loading ? (
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                ) : (
                        "Pagar"
                    )}
            </button>
        </form>
    );
};

function Pasarela() {
    return (
        <Elements stripe={stripePromise}>
            <div className="container p-4">
                <div className="row h-100">
                    <div className="col-md-4 offset-md-4 h-100">
                        <CheckoutForm />
                    </div>
                </div>
            </div>
        </Elements>
    );
}

export default Pasarela;