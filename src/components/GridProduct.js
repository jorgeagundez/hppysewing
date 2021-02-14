import React from 'react';

const GridProduct = ({product, cart, setCart}) => {

    const {name, img, price, description} = product;

    const addToCart = () => {        
        setCart([
            ...cart,
            product
        ]);
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