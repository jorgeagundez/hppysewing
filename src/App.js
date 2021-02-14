import React, { Fragment } from 'react';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container">
        <header className="header">
          <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="logo" alt="logo" />
          <p>Bienvenidos a Hppysewing</p>
        </header>
        <aside className="cart">
          <p>Carrito</p>
        </aside>
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
