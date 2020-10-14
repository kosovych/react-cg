import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import CSSTransition from 'react-transition-group/CSSTransition';

class App extends Component {
  state = {
    modalOpen: false,
    showBlock: false,
  }
  openModal() {
    this.setState({modalOpen: true});
  }
  closeModal() {
    this.setState({modalOpen: false});
  }
  toggleShowBlock () {
    this.setState(({ showBlock }) => ({showBlock: !showBlock}))
  }
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button onClick={() => this.toggleShowBlock()}>Toggle Block</button>
        <br />
        <CSSTransition
          in={this.state.showBlock}
          timeout={{
            enter: 0,
            exit: 3000,
          }}
          classNames="test-div"
          mountOnEnter
          unmountOnExit
        >
          <div className="test-div">
          </div>
        </CSSTransition>
        <Modal show={this.state.modalOpen} closed={() => this.closeModal()} />
        <Backdrop show={this.state.modalOpen} />
        <button className="Button" onClick={() => this.openModal()}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
