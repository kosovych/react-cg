import React, { useState } from 'react';

const Toolbar = () => {
  const [ isOpen, setOpen ] = useState(false);
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
        <a className="navbar-brand" href="#">Navbar</a>
        <button onClick={ ()=> setOpen(!isOpen) } className="navbar-toggler" type="button" >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`${isOpen ? 'show' : ''} collapse navbar-collapse`} id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
};

export default Toolbar;
