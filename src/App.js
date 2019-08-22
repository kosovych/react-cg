import React, { useState } from 'react';
import UserInput from './UserInput/';
import UserOutput from './UserOutput/';

class App extends React.Component {
  state = {
    name: 'John',
  };

  setName = (value) => {
    this.setState({
      name: value,
    });
  }

  render() {
    return (
      <div>
      <UserInput value={this.state.name} change={this.setName} />
      <UserOutput name={this.state.name} />
    </div>
  )
}
};

export default App;