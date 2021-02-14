import React from 'react';

const CartProduct = ({product, cart, setCart}) => {

    const {id, name, price, description} = product;

    const deleteFromCart = () => {     
        const products = cart.filter(product => product.id !== id);
        setCart(products);
    }

    return (
        <div className="grid-product">
            <p>{name}</p>
            <p>Precio: {price} €</p>
            <p>{description}</p>
            <button
                onClick={() => deleteFromCart()}
            >Borrar del carrito</button>
        </div>
    )
}

export default CartProduct;