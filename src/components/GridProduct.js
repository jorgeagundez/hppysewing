import React from 'react';

const GridProduct = ({product, cart, setCart}) => {

    const {id, type, name, img, price, description} = product;

    const addToCart = () => {
        let productIsAlready = false;
        cart.forEach(cartProduct => {
            if (cartProduct.id === id) {
                productIsAlready = true;
            }
        });

        if (!productIsAlready) {
            product.quantity = 1;
            setCart([
                ...cart,
                product
            ]);
        } else {
            const newCart = cart.map(cartProduct => {
                if (cartProduct.id === id) {
                    cartProduct.quantity++;
                }

                return cartProduct;
            });

            setCart(newCart);
        }
    }

    return (
        <div className="grid-product">
            <p
                className="name"
            >{name}</p>
            <div className="product-img">
                <img src={process.env.PUBLIC_URL + '/img/' + img} alt="logo" />
            </div>
            <p>Tipo: {type}</p>
            <p>Precio: <strong>{price} €</strong></p>
            <p>{description}</p>
            <button
                onClick={() => addToCart()}
                className="cta-pp bluesky"
            >Añadir al carrito</button>
        </div>
    )
}

export default GridProduct;