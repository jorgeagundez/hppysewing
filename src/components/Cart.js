import React, { Fragment } from 'react';
import CartProduct from './CartProduct.js';

const Cart = ({cart, setCart}) => {

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach(product => (
            total = total + (product.price * product.quantity)
        ));

        return total;
    }

    return (
        <aside className="cart">
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
                        <p>Precio total: {getTotalPrice()} €</p>
                    </div>

                    <button>Realizar pedido</button>
                </Fragment>
            :
                <p>No hay productos en el carrito</p>
            }
        </aside>
    )
}

export default Cart;