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
  
  let manualVersion = ['14','03','2021','01','22'];
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
          <h1 className="h1">Bienvenid@s a la tienda <span>hppysewing</span></h1>
          <h2 className="h2">Marca local Catalana de diseño y confección de complementos hechos a mano por encargo.</h2>
          <p>Aquí encontrarás piezas únicas realizadas de forma artesanal que podrás encargar de forma fácil y sin ningún compromiso.</p>
          <p>También realizamos encargos personalizados, para mas información ponte en contacto a través de nuestra cuenta de instagram <a href="https://www.instagram.com/hppysewing/" rel="noreferrer" target="_blank">@hppysewing</a></p>
          <div className="grid">
            <h2 className="h2"><stront>Productos disponibles:</stront></h2>
            {products.map(product => (
              <GridProduct
                key={product.id}
                product={product}
                cart={cart}
                setCart={setCart}
              />
            ))}
          </div>
          <p>Pronto más productos disponibles, mientras tanto no dejes de visitarnos en <a href="https://www.instagram.com/hppysewing/" rel="noreferrer" target="_blank">@hppysewing</a></p>
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
