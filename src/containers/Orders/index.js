import React from 'react';
import Order from '../../components/Order';
import axios from '../../axios/order-lost';
import widthErrorHendler from '../../hoc/widthErrorHendler';
import Spiner from '../../components/ui/Spiner';

class Orders extends React.Component {
    state = {
        orders: [],
        loading: false,
    };
    componentWillMount() {
        this.setState({loading: true})
        axios
            .get('/orders.json')
            .then(res => {
                let orders = [];
                for ( let order in res.data) {
                    orders.push({ingr: res.data[order].ingr, totalPrice: res.data[order].totalPrice, id: order})
                };
                this.setState({loading: false, orders})
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
                {this.state.loading ? <Spiner /> : null}
                <div>
                    {orders}
                </div>
            </>
        )
    }
}

export default widthErrorHendler(Orders, axios);