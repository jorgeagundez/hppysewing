import React from 'react';

const GridProduct = ({product, updateProducts, cart, setCart}) => {

    const {name, img, price, description} = product;

    const setProductQuantity = () => {
        if (product.quantity === undefined) {
            product.quantity = 1;
        } else {
            product.quantity++;
        }
    }

    const addToCart = () => {

        setProductQuantity();

        let productIsAlready = cart.includes(product);

        if (!productIsAlready) {
            setCart([
                ...cart,
                product
            ]);
        } else {
            setCart([
                ...cart
            ]);
        }
    }

    return (
        <div className="grid-product">
            <p>{name}</p>
            <img src={process.env.PUBLIC_URL + '/img/' + img} alt="logo" />
            <p>Precio: {price} €</p>
            <p>{description}</p>
            <button
                onClick={() => addToCart()}
            >Añadir al carrito</button>
        </div>
    )
}

export default GridProduct;