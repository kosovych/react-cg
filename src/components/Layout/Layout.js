import React from 'react';
import style from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const Layout = ( {children} ) => {
  return (
    <>
      <Toolbar />
      <main className={style.main}>
        {children}
      </main>
    </>
  )
};

export default Layout;
