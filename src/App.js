import React, { Fragment, useState, useEffect } from 'react';
import GridProduct from './components/GridProduct.js';
import Cart from './components/Cart.js';

import './App.css';

function App() {

  const [products] = useState([
    {
      id: 1,
      name: 'Producto 1',
      img: 'product1.jpg',
      price: 12,
      description: 'Descripción de producto 1'
    },
    {
      id: 2,
      name: 'Producto 2',
      img: 'product2.jpg',
      price: 12,
      description: 'Descripción de producto 2'
    },
    {
      id: 3,
      name: 'Producto 3',
      img: 'product3.jpg',
      price: 12,
      description: 'Descripción de producto 3'
    },
    {
      id: 4,
      name: 'Producto 4',
      img: 'product4.jpg',
      price: 12,
      description: 'Descripción de producto 4'
    },
  ]);


  let cartInicial = JSON.parse(localStorage.getItem('cart'));
  if (!cartInicial) {
    cartInicial = [];
  }

  const [cart, setCart] = useState(cartInicial);

  useEffect(() => {
    if (cartInicial) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.setItem('cart', []);
    }
  }, [cart, cartInicial])

  return (
    <Fragment>
      <div className="wrapper">
        <header className="header">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" />
          </div>
          <div className="name u-wrapper-padding">
            <p className="title">Hppysewing</p>
            <p className="subtitle">Tienda virtual</p>
          </div>
          <Cart
            cart={cart}
            setCart={setCart}
          />
        </header>

        <section className="products">
          <h1>Productos disponibles</h1>
          <div>
            {products.map(product => (
              <GridProduct
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
        </section>
        <footer className="footer">
          <nav>
            Redes sociales
          </nav>
        </footer>
      </div>
    </Fragment>
  );
}

export default App;
