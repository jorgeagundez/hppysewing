import React, { Fragment } from 'react';
import CartProduct from './CartProduct.js';

const Cart = ({cart, setCart, toggle, toggleClass}) => {

    const freeShipping = 50;

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach(product => (
            total = total + (product.price * product.quantity)
        ));

        return total;
    }

    const getDeliveryPrice = () => {
        if(getTotalPrice() > freeShipping) {
            return 0;
        }

        return 5;
    }

    const getTotalItems = () => {
        let items = 0;
        cart.forEach(product => (
            items = items + product.quantity
        ));

        return items;
    }

    return (
        <div className="cart">
            <button
                className="button icon"
                onClick={() => toggleClass()}
            >
                <i className={ toggle ? 'fas fa-shopping-cart hide' : 'fas fa-shopping-cart '}>
                    <span>{getTotalItems()}</span>
                </i>
                <span className={ toggle ? '' : 'hide'}>X</span>
            </button>
            <div
                className={ toggle ? "wrapper items open" : "wrapper items"}
            >
                <Fragment>
                {cart.length > 0
                ?
                    <Fragment>
                        <ul>
                            {cart.map(product => (
                                <li key={product.id}>
                                    <CartProduct
                                        key={product.id}
                                        product={product}
                                        cart={cart}
                                        setCart={setCart}
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className="summary-price">
                            <p>Subtotal: <strong>{getTotalPrice()} €</strong></p>
                            <p>Gastos de envío: <strong>{getDeliveryPrice()} €</strong><span className="free">(Gratis a partir de {freeShipping}€)</span></p>
                            <p>Precio total <span>(IVA inc.)</span>: <strong>{getTotalPrice() + getDeliveryPrice()} €</strong></p>
                            <p>
                                <span>* Solicitando tu pedido, recibirás información por correo electrónico de la disponibilidad 
                                y del proceso para encargar los productos seleccionados, sin ningún compromiso. Una vez solitado 
                                tu pedido, nos pondremos en contacto contigo para concretar la dirección de envío, tiempo de 
                                entrega y detalles sobre el modo de pago (Bizum o transaferencia bancaria).
                                </span>
                            </p>
                        </div>
                        <button
                            className="cta-pp mostaza"
                        >Solicitar pedido *</button>
                    </Fragment>
                :
                    <Fragment>
                        <div className="alert">
                            <p
                            className="text-center"
                        >¡Aún no hay productos para poder realizar un pedido! Por favor, vuelve al grid de productos y selecciona al menos uno</p>
                        </div>
                    </Fragment>
                }
                </Fragment>
            </div>
        </div>
    )
}

export default Cart;