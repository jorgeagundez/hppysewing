import React from 'react';

const CartProduct = ({product, cart, setCart}) => {

    const {id, name, img, price, description, quantity} = product;

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
        <div className="cart-products">
            <div className="product-img">
                <img src={process.env.PUBLIC_URL + '/img/' + img} alt="logo" />
            </div>
            <div className="cart-data">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <p>Precio <strong>{price} €</strong> <span>(IVA inc.)</span></p>
                <p>Cantidad: <strong>{quantity} </strong>{quantity === 1 ? 'unidad' : 'unidades'}</p>
                <button
                    onClick={() => deleteFromCart()}
                >Borrar del carrito</button>
                <button
                    onClick={() => removeOne()}
                >-</button>
                <button
                    onClick={() => addOne()}
                >+</button>
            </div>
        </div>
    )
}

export default CartProduct;