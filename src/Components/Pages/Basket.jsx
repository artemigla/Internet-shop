import React from 'react';
import style from './Styles/Basket.module.scss';

const Basket = ({ item, cartProducts, setCartProducts }) => {
    console.log("cartProducts ", cartProducts);


    return (

        <div className={style.basket}>
            <h3>Basket</h3>
        </div>
    )
}
export default Basket;