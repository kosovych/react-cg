import React from 'react';
import Layout from './components/Layout/Layout';
import BurdergBuilder from './containers/BurdergBuilder';

class App extends React.Component {
  
  render() {
    return (
      <Layout>
        <BurdergBuilder />
      </Layout>
    )
  }
}

export default App;
