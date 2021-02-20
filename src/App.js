import React, { Fragment, useState, useEffect } from 'react';
import GridProduct from './components/GridProduct.js';
import Cart from './components/Cart.js';

import './App.css';

function App() {

  const [products] = useState([
    {
      id: 1,
      name: 'Mini-neceser Flor de Azahar',
      img: 'product1.jpg',
      price: 12,
      description: 'Mini-neceser con tela vaquera reciclada en el exterior y algodon azul marino en el interior. Tamaño 13x9x5cm'
    },
    {
      id: 2,
      name: 'Mini-neceser Sandías',
      img: 'product2.jpg',
      price: 12,
      description: 'Mini-neceser con tela de lona de algodón malva en el exterior y estampado de sandías en la solapa e interior. Tamaño 13x9x5cm'
    },
    {
      id: 3,
      name: 'Mini-neceser grecas cielo',
      img: 'product3.jpg',
      price: 12,
      description: 'Mini-neceser con tela de lona de algodón mostaza en el exterior y estampado de gracas azul en la solapa e interior. Tamaño 13x9x5cm'
    },
    {
      id: 4,
      name: 'Mini-neceser corazones',
      img: 'product4.jpg',
      price: 12,
      description: 'Mini-neceser con tela de lona de algodón blanco roto en el exterior y estampado de corazones en la solapa e interior. Tamaño 13x9x5cm'
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
