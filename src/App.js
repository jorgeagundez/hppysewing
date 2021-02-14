import React, { Fragment, useState } from 'react';
import GridProduct from './components/GridProduct.js';
import Cart from './components/Cart.js';

import './App.css';

function App() {

  const [products] = useState([
    {
      id: 1,
      name: 'Producto 1',
      img: 'product1.jpg',
      price: '12',
      description: 'Descripción de producto 1'
    },
    {
      id: 2,
      name: 'Producto 2',
      img: 'product2.jpg',
      price: '12',
      description: 'Descripción de producto 2'
    },
    {
      id: 3,
      name: 'Producto 3',
      img: 'product3.jpg',
      price: '12',
      description: 'Descripción de producto 3'
    },
    {
      id: 4,
      name: 'Producto 4',
      img: 'product4.jpg',
      price: '12',
      description: 'Descripción de producto 4'
    },
  ]);

  const [cart, setCart] = useState([]);

  return (
    <Fragment>
      <div className="wrapper">
        <header className="header">
          <div className="wrapper-logo">
            <div className="logo">
              <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" />
            </div>
            <div className="u-wrapper-padding">
              <p className="title">Hppysewing</p>
              <p className="subtitle">Tienda virtual</p>
            </div>
          </div>
          <Cart
            key='1'
            cart={cart}
            setCart={setCart}
          />
        </header>

        <section className="products">
          <h1>Sección principal</h1>
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
