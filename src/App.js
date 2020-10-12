import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Logout from './containers/Auth/Logout';
import { authCheckStatus } from './redux/actions/index';
import asyncComponent from './hoc/asyncComponent';

const asynсCheckout = asyncComponent(() => {
  return import('./containers/Checkout');
});

const asynсOrders = asyncComponent(() => {
  return import('./containers/Orders');
});

const asynсAuth = asyncComponent(() => {
  return import('./containers/Auth');
});
class App extends React.Component {
  componentDidMount() {
    this.props.authCheckStatus();
  }
  render() {
    const protectedRouts = (
      [
        <Route key="checkout" path="/checkout" component={asynсCheckout} />,
        <Route key="orders" path="/orders" component={asynсOrders} />,
        <Route key="logout" path="/logout" component={Logout} />,
      ]
    );
    return (
      <Layout>
        <Switch>
          { this.props.isAuthenticated && [...protectedRouts] }
          <Route path="/auth" component={asynсAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authCheckStatus: () => dispatch(authCheckStatus())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
