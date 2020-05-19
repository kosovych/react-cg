import React from 'react';

const Order = ({orderDitails}) => {
    const { ingredients, totalPrice } = orderDitails;
    const _ingredients = Object
        .entries(ingredients)
        .map((ingredientsArr, i) =>
            {
                return (
                    <li className="list-group-item d-flex align-items-center text-capitalize" key={i}>
                        {ingredientsArr[0]}
                        <span className="ml-3 badge badge-primary badge-pill">{ingredientsArr[1]}</span>
                    </li>
                )
            }
        )
    return (
        <section className="shadow p-4 bg-white rounded m-5">
            <h3 className="mb-3">Ingredients:</h3>
            <ul className="list-group mb-3">
                {_ingredients}
            </ul>
            <p className="text-right alert alert-success font-weight-bold" role="alert">
                Price: ${totalPrice}
            </p>
        </section>
    )
};

export default Order;