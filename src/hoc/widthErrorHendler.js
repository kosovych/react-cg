import React from 'react';
import Modal from '../components/ui/Modal/Modal';

const widthErrorHendler = (Wrapper, axios) => {
  return class extends React.Component {
    state = {
      error: false
    }

    componentWillMount() {
      this.reqInterseptor = axios.interceptors.request.use();
      this.resInterseptor = axios.interceptors.response.use(res => res, error => {
        console.dir(error);
        this.setState(() => ({error: error}));
        return error;
      });
    }

    componentWillUnmount() {
       axios.interceptors.request.eject(this.reqInterseptor);
       axios.interceptors.response.eject(this.resInterseptor);
    }
    
    render() {
      return (
        <>
          <Modal
            shown={this.state.error}
            onCloseHandler={() => this.setState({error: null}) }
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <Wrapper />
        </>
      )
    }
  }
};

export default widthErrorHendler;