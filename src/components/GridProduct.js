import React from 'react';

const GridProduct = ({product, cart, setCart}) => {

    const {type, name, img, price, description} = product;


    // TODO: create a State for CartProduct to manage Quantity
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
            <p
                className="name"
            ><span>{type}:</span> {name}</p>
            <div className="product-img">
                <img src={process.env.PUBLIC_URL + '/img/' + img} alt="logo" />
            </div>
            <p>Precio: {price} €</p>
            <p>{description}</p>
            <button
                onClick={() => addToCart()}
            >Añadir al carrito</button>
        </div>
    )
}

export default GridProduct;