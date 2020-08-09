import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Checkout from './containers/Checkout/';
import Orders from './containers/Orders';
import Auth from './containers/Auth';

class App extends React.Component {
  
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    )
  }
}

export default App;
