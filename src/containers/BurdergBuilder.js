import React from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';


class BurdergBuilder extends React.Component {
  state = {
    ingr: {
      meat: 0,
      cheese: 0,
      salet: 0,
      becon: 0
    }
  };

  addIngridiend = (type) => {
    console.log(type);
    
    this.setState((prevState) => {
      return { ingr: { ...prevState.ingr, [type]: prevState.ingr[type] + 1 }}
    }, () => console.log(this.state)); 
  }

  render() {
    const { ingr } = this.state;
    return (
      <>
        <Burger ingr={ingr} />
        <BuildControls addIng={this.addIngridiend} />
      </>

    )
  } 
};

export default BurdergBuilder;
