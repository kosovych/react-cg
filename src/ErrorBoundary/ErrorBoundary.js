import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMsq: '',
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMsq: 'error'});
  }

  render() {
    if(this.state.hasError) {
      return <h1>Something went wrong</h1>
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;