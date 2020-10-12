import React from 'react';
import Modal from '../components/ui/Modal/Modal';

const widthErrorHandler = (Wrapper, axios) => {
  return class extends React.Component {
    state = {
      error: false
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use();
      this.resInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState(() => ({error: error}));
        return error;
      });
    }

    componentWillUnmount() {
       axios.interceptors.request.eject(this.reqInterceptor);
       axios.interceptors.response.eject(this.resInterceptor);
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
          <Wrapper {...this.props} />
        </>
      )
    }
  }
};

export default widthErrorHandler;
