import React from 'react';
import style from './Layout.module.css';

const Layout = ( {children} ) => {
  return (
    <>
      <div>
        Toolbar,
        Sidebar,
        Backbrop,
      </div>
      <main className={style.main}>
        {children}
      </main>
    </>
  )
};

export default Layout;
