import React from 'react';
import Burger from '../components/Burger/Burger'; 

class BurdergBuilder extends React.Component {
  state = {
    ingr: {
      meat: 1,
      cheese: 2,
      salet: 1,
      becon: 3
    }
  };
  render() {
    const { ingr } = this.state;
    return (
      <>
        <Burger ingr={ingr} />
        <p>BurgerControls</p>
      </>

    )
  } 
};

export default BurdergBuilder;
