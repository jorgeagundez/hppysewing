import React, { Fragment } from 'react';
import './App.css';

function App() {
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
          <aside className="cart">
            <p>Carrito</p>
          </aside>
        </header>

        <section className="products">
          <h1>Sección principal</h1>
          <div>
            <div className="single-product">Producto 1</div>
            <div className="single-product">Producto 2</div>
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
