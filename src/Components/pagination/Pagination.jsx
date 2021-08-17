import React from 'react';
import style from './Styles/style.module.scss';
import PropTypes from 'prop-types';

const Pagination = ({ cartPerPage, totalCart, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCart / cartPerPage); i++) {
        pageNumbers.push(i);
    }

    const counterNumbers = pageNumbers.map((item) => {
        return (
            <li className={style.pageitem} key={item}>
                <button onClick={() => paginate(item)}>{item}</button>
            </li>
        )
    })

    return (
        <div className={style.content}>
            <ul className={style.pagination}>
                {counterNumbers}
            </ul>
        </div>
    )
}

Pagination.propTypes = {
    cartPerPage: PropTypes.number.isRequired,
    totalCart: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
}
export default Pagination;