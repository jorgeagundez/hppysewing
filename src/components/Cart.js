import React, { Fragment, useState } from 'react';
import CartProduct from './CartProduct.js';

const Cart = ({cart, setCart, toggle, toggleClass}) => {

    const freeShipping = 30;

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
                <i className="fas fa-shopping-cart"></i><span>{getTotalItems()}</span>
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
                        </div>

                        <button
                            className="cta-pp mostaza"
                        >Realizar pedido</button>
                    </Fragment>
                :
                    <p>No hay productos en el carrito</p>
                }
                </Fragment>
            </div>
        </div>
    )
}

export default Cart;