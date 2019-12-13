import React, { useState } from 'react';
import Logo from '../../Logo/Logo';
import Backdrop from '../../../components/ui/Backdrop/Backdrop';

const Toolbar = () => {
  const [ isOpen, setOpen ] = useState(false);
  return (
    <>
      <header className="fixed-top">
        <div className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
          <a className="navbar-brand" href="#">
            <Logo />
          </a>
          <button onClick={ ()=> setOpen(!isOpen) } className="navbar-toggler" type="button" >
            <span className="navbar-toggler-icon" />
          </button>

          <nav className={`${isOpen ? 'navbar-collapse--open' : ''} collapse navbar-collapse`}>
            <ul className="navbar-nav ml-auto">
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
          </nav>
        </div>
      </header>
      {isOpen && <Backdrop clicked={() => setOpen(!isOpen)} /> }
    </>
  )
};

export default Toolbar;
