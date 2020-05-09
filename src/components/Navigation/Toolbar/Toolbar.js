import React, { useState } from 'react';
import Logo from '../../Logo/Logo';
import Backdrop from '../../../components/ui/Backdrop/Backdrop';
import { Link, NavLink } from 'react-router-dom'

const Toolbar = () => {
  const [ isOpen, setOpen ] = useState(false);
  return (
    <>
      <header className="fixed-top">
        <div className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>
          <button onClick={ ()=> setOpen(!isOpen) } className="navbar-toggler" type="button" >
            <span className="navbar-toggler-icon" />
          </button>

          <nav className={`${isOpen ? 'navbar-collapse--open' : ''} collapse navbar-collapse`}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink activeClassName="active" exact className="nav-link" to="/">Burger Builder</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/orders">Orders</NavLink>
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
