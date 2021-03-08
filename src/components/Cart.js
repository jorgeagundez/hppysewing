import React, { Fragment } from 'react';
import CartProduct from './CartProduct.js';

const Cart = ({cart, setCart, toggle, toggleClass}) => {

    const freeShipping = 50;

    const getTotalPrice = () => {
        let total = 0;
        cart.forEach(product => (
            total = total + (product.price * product.quantity)
        ));

        return total;
    }

    const getDeliveryPrice = () => {
        if(getTotalPrice() > freeShipping) {
            return 0;
        }

        return 5;
    }

    const getTotalItems = () => {
        let items = 0;
        cart.forEach(product => (
            items = items + product.quantity
        ));

        return items;
    }

    const emailSubject = () => {
        return `Solicitud%20de%20pedido%20tienda%20online%20hppysewing`;
    }

    const emailBody = () => {
        let body = '¡Hola!%0D%0A%0D%0AMe%20gustaría%20solicitar%20un%20pedido%20con%20los%20siguientes%20productos:%0D%0A%0D%0A';
        cart.forEach((product, index) => {
            let line = `${index + 1}%20-%20Producto%20(Ref.${product.id}):%0D%0A`;
            line = `${line}----------------------------%0D%0A`;
            line = `${line}Nombre:%20${product.type}%20${product.name}%0D%0A`;
            line = `${line}Precio%20por%20unidad%20(IVA%20inc.):%20${product.price}€%0D%0A`;
            line = `${line}Cantidad:%20${product.quantity}%0D%0A%0D%0A`;
            body = body + line;
        });

        body = `${body}%0D%0ADesglose de precios:%0D%0A`;
        body = `${body}************************%0D%0A`;

        cart.forEach((product, index) => {
            body = `${body}Producto%20${index + 1}%20(${product.quantity}x${product.price}€):............${product.quantity * product.price}€%0D%0A`;
        });

        body = `${body}%0D%0ASubtotal:..............................${getTotalPrice()}€%0D%0A`;
        body = `${body}Gastos%20de%20envío%20(*):..............${getDeliveryPrice()}€%0D%0A`;
        body = `${body}Precio%20total%20(IVA inc.):..........${getTotalPrice() + getDeliveryPrice()}€%0D%0A`;
        body = `${body}%0D%0A(*)%20Gratis%20a%20partir%20de%20${freeShipping}€%0D%0A%0D%0A`;
        body = `${body}%0D%0AMuchas%20gracias`;

        return body;
    }

    return (
        <div className="cart">
            <button
                className="button icon"
                onClick={() => toggleClass()}
            >
                <i className={ toggle ? 'fas fa-shopping-cart hide' : 'fas fa-shopping-cart '}>
                    <span>{getTotalItems()}</span>
                </i>
                <span className={ toggle ? '' : 'hide'}>X</span>
            </button>
            <div
                className={ toggle ? "wrapper items open" : "wrapper items"}
            >
                <Fragment>
                {cart.length > 0
                ?
                    <Fragment>
                        <ul>
                            {cart.map(product => (
                                <li key={product.id}>
                                    <CartProduct
                                        key={product.id}
                                        product={product}
                                        cart={cart}
                                        setCart={setCart}
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className="summary-price">
                            <p>Subtotal: <strong>{getTotalPrice()} €</strong></p>
                            <p>Gastos de envío: <strong>{getDeliveryPrice()} €</strong><span className="free">(Gratis a partir de {freeShipping}€)</span></p>
                            <p>Precio total <span>(IVA inc.)</span>: <strong>{getTotalPrice() + getDeliveryPrice()} €</strong></p>
                            <p>
                                <span>* Solicitando tu pedido, recibirás información por correo electrónico de la disponibilidad
                                y del proceso para finalizar el encargo de los productos seleccionados, sin ningún compromiso. Una vez confirmado
                                tu pedido, volveremos a ponernos en contacto contigo para concretar la dirección de envío, tiempo de
                                entrega y detalles sobre el modo de pago (Bizum o transaferencia bancaria).
                                </span>
                            </p>
                        </div>

                        <a
                            href={"mailto:hppysewinginfo@gmail.com?Subject=" + emailSubject() + "&body=" + emailBody()}
                            className="cta-pp mostaza"
                        >Solicitar pedido *</a>
                    </Fragment>
                :
                    <Fragment>
                        <div className="alert">
                            <p
                            className="text-center"
                        >¡Aún no hay productos para poder realizar un pedido! Por favor, vuelve al grid de productos y selecciona al menos uno</p>
                        </div>
                    </Fragment>
                }
                </Fragment>
            </div>
        </div>
    )
}

export default Cart;