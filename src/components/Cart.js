import React, { Fragment, useState } from 'react';
import CartProduct from './CartProduct.js';

const Cart = ({cart, setCart}) => {

    const [toggle, setToggle] = useState(false);

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach(product => (
            total = total + (product.price * product.quantity)
        ));

        return total;
    }

    const getTotalItems = () => {
        let items = 0;
        cart.forEach(product => (
            items = items + product.quantity
        ));

        return items;
    }

    const toggleClass = () => {
        setToggle(!toggle);
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
                className={ toggle ? "items open" : "items"}
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
                        <div>
                            <p>Precio total: <strong>{getTotalPrice()} €</strong> <span>(IVA inc.)</span></p>
                        </div>

                        <button
                            className="cta-pp"
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