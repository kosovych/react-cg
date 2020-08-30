import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../../redux/actions';

class Logout extends React.Component {
    componentDidMount() {
        this.props.logout();
    }
    render() {
        return <Redirect to="/" />
    }
};

const mapDispatchToProps = dispath => ({
    logout: () => dispath(logout()),
})

export default connect(null, mapDispatchToProps)(Logout);