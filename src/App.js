import React, { Fragment, useState, useEffect } from 'react';
import GridProduct from './components/GridProduct.js';
import Cart from './components/Cart.js';
import products from './productsAvailables.js';

import './App.css';

function App() {

  const [toggle, setToggle] = useState(false);
  const toggleClass = () => {
    setToggle(!toggle);
  }
  
  let manualVersion = ['08','03','2021','01','22'];
  const calculateDataBaseVersion = (manualVersion) => {
    let version = manualVersion.reduce((a, b) => a + b);
    return (
      version
    )
  }
  const [dataBaseVersion] = useState(calculateDataBaseVersion(manualVersion));

  let cartInicial = JSON.parse(localStorage.getItem('cart'));
  let cartInicialVersion = JSON.parse(localStorage.getItem('cartVersion'));

  if (!cartInicial || cartInicialVersion !== dataBaseVersion) {
    cartInicial = [];
  }

  const [cart, setCart] = useState(cartInicial);
  const [cartVersion] = useState(dataBaseVersion);

  useEffect(() => {
    if (cartInicial) {
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('cartVersion', JSON.stringify(cartVersion));
    } else {
      localStorage.setItem('cart', []);
    }
  }, [cart, cartInicial, cartVersion])

  return (
    <Fragment>
      <div className="wrapper">
        <header className="header">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" />
          </div>
          <div className="u-wrapper-padding">
            <p className="title">Hppysewing</p>
            <p className="subtitle">Tienda virtual</p>
          </div>
          <Cart
            cart={cart}
            setCart={setCart}
            toggle={toggle}
            toggleClass={toggleClass}
          />
        </header>

        <section 
          className={ toggle ? "products hide" : "products"}
        >
          <h1 className="h1">Productos disponibles</h1>
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
        {/* <footer className="footer">
          <nav>
            Redes sociales
          </nav>
        </footer> */}
      </div>
    </Fragment>
  );
}

export default App;
