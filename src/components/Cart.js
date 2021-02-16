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

    const getTotalItems = () => {
        let items = 0;
        cart.forEach(product => (
            items = items + product.quantity
        ));

        return items;
    }

    return (
        <aside className="cart">
            <div className="icon">
                <i class="fas fa-shopping-cart"></i><span>( {getTotalItems()} )</span>
            </div>
            <div className="items">
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
                            <p>Precio total: {getTotalPrice()} €</p>
                        </div>

                        <button>Realizar pedido</button>
                    </Fragment>
                :
                    <p>No hay productos en el carrito</p>
                }
                </Fragment>
            </div>
        </aside>
    )
}

export default Cart;