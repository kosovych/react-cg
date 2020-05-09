import React from 'react';

const Order = ({orderDitails}) => {
    const { ingr, totalPrice } = orderDitails;
    const ingridients = Object
        .entries(ingr)
        .map((ingrArr, i) =>
            {
                return (
                    <li className="list-group-item d-flex align-items-center text-capitalize" key={i}>
                        {ingrArr[0]}
                        <span className="ml-3 badge badge-primary badge-pill">{ingrArr[1]}</span>
                    </li>
                )
            }
        )
    return (
        <section className="shadow p-4 bg-white rounded m-5">
            <h3 className="mb-3">Ingridienrs:</h3>
            <ul className="list-group mb-3">
                {ingridients}
            </ul>
            <p className="text-right alert alert-success font-weight-bold" role="alert">
                Price: ${totalPrice}
            </p>
        </section>
    )
};

export default Order;