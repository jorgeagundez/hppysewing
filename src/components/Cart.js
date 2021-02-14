import React, { Fragment } from 'react';
import CartProduct from './CartProduct.js';

const Cart = ({cart, setCart}) => {

    return (
        <Fragment>
            <aside className="cart">
                {cart.length > 0
                ?
                    <Fragment>
                    <ul>
                        {cart.map(product => (
                            <li>
                                <CartProduct
                                    key='123143'
                                    product={product}
                                    cart={cart}
                                    setCart={setCart}
                                />
                            </li>
                        ))}
                    </ul>
                    <button>Realizar pedido</button>
                    </Fragment>
                :
                    <p>No hay productos en el carrito</p>
                }

                
            </aside>
        </Fragment>
    )
}

export default Cart;