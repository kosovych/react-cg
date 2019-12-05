import React from 'react';

const authContext = React.createContext({
  auth: false,
  logIn: () => {}
});

export default authContext;
