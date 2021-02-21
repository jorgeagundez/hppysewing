import React from 'react';

const CartProduct = ({product, cart, setCart}) => {

    const {id, name, type, img, price, description, quantity} = product;

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
            <div className="cart-img">
                <img src={process.env.PUBLIC_URL + '/img/' + img} alt="logo" />
            </div>
            <div className="cart-data">
                <p className="name">{type} - {name}</p>
                <p className="description">{description}</p>
                <p>Precio: <strong>{price} €</strong> / unidad</p>
                <p>Cantidad: <strong>{quantity} </strong>{quantity === 1 ? 'unidad' : 'unidades'}</p>
                <p>Subtotal: <strong>{quantity * price} €</strong><span>(IVA inc.)</span></p>
                <div className="actions">
                    <div>
                        <button
                            onClick={() => removeOne()}
                            className="minus"
                        ><i className="fas fa-minus"></i></button>
                        <button
                            onClick={() => addOne()}
                            className="plus"
                        ><i className="fas fa-plus"></i></button>
                    </div>
                    <button
                        onClick={() => deleteFromCart()}
                        className="delete"
                    ><i className="far fa-trash-alt"></i></button>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;