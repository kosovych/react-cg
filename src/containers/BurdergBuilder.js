import React from 'react';
import Burger from '../components/Burger/Burger'; 

class BurdergBuilder extends React.Component {
  render() {
    return (
      <>
        <Burger />
        <p>BurgerControls</p>
      </>

    )
  } 
};

export default BurdergBuilder;
