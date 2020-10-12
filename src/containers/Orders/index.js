import React from 'react';
import { connect } from 'react-redux';
import Order from '../../components/Order';
import axios from '../../axios/order-lost';
import widthErrorHandler from '../../hoc/widthErrorHandler';
import Spinner from '../../components/ui/Spinner';

class Orders extends React.Component {
    state = {
        orders: [],
        loading: false,
    };
    componentWillMount() {
        const userId = this.props.userId;
        this.setState({loading: true})
        axios
            .get(`/orders.json?auth=${this.props.token}&orderBy="userId"&equalTo="${userId}"`)
            .then(res => {
                let orders = [];
                for ( let order in res.data) {
                    orders.push({ingredients: res.data[order].ingredients, totalPrice: res.data[order].totalPrice, id: order})
                };
                this.setState(() => ({loading: false, orders}))
            }
        )

    }
    render() {
        let orders = (
            this.state.orders.lendth === 0
            ?
                <p class="p-5">No orders!</p>
            :
                this.state.orders.map(order => <Order key={order.id} orderDitails={order} />)
        )
        return(
            <>
                {this.state.loading ? <Spinner /> : null}
                <div>
                    {orders}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    userId: state.auth.userId,
});

export default widthErrorHandler(connect(mapStateToProps, null)(Orders), axios);
