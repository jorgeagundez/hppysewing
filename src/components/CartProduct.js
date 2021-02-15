import React from 'react';

const CartProduct = ({product, cart, setCart}) => {

    const {id, name, price, description, quantity} = product;

    const deleteFromCart = () => {
        product.quantity = 0;
        const newCart = cart.filter(product => product.id !== id);
        setCart(newCart);
    }

    const addOne = () => {
        const newCart = cart.map(product => {
            if (product.id === id) {
                product.quantity++;
            }

            return product;
        });

        setCart(newCart);
    }

    const removeOne = () => {
        const newCart = cart.map(product => {
            if (product.id === id) {
                product.quantity--;
            }

            return product;
        });

        const products = newCart.filter(product => product.quantity > 0);
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
            <button
                onClick={() => removeOne()}
            >Quitar 1</button>
            <button
                onClick={() => addOne()}
            >Añadir 1</button>
        </div>
    )
}

export default CartProduct;