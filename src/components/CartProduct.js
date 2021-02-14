import React from 'react';

const CartProduct = ({product, cart, setCart}) => {

    const {id, name, price, description, quantity} = product;

    const deleteFromCart = () => {
        product.quantity = 0;
        const products = cart.filter(product => product.id !== id);
        setCart(products);
    }

    return (
        <div className="grid-product">
            <p>{name}</p>
            <p>Precio: {price} €</p>
            <p>{description}</p>
            <p>Cantidad: {quantity}</p>
            <button
                onClick={() => deleteFromCart()}
            >Borrar del carrito</button>
        </div>
    )
}

export default CartProduct;