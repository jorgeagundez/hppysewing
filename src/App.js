import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Fragment>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>Bienvenidos a Hppysewing</p>
      </header>
      <aside>
        <p>Carrito</p>
      </aside>
      <section>
        <h1>Sección principal</h1>
        <div className="productos">
          <div>Producto 1</div>
          <div>Producto 2</div>
        </div>
      </section>
      <footer>
        <nav>
          Redes sociales
        </nav>
      </footer>
    </Fragment>
  );
}

export default App;
