import React from 'react';
import PropTypes from 'prop-types';
import style from './Styles/Basket.module.scss';

const Basket = ({ data }) => {

    return (
        <div className={style.basket}>
            <h3>Basket</h3>
            <h3>{data}</h3>
        </div>
    )
}

Basket.propTypes = {
    data: PropTypes.string.isRequired
}
export default Basket;