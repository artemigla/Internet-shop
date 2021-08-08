import React from 'react';
import style from './Styles/Home.module.scss';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
const ShowDevices = ({ cartProducts, loading, search, setCartProducts }) => {
    const { t } = useTranslation();
    if (loading) {
        <h3>Loading...</h3>
    }
    const addToCart = (product) => {
        let newCart = [...cartProducts];

        let itemInCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCartProducts(newCart);
    };

    const itemList = cartProducts.filter((item) => {
        if (search === "") {
            return item;
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
        return 0;
    }).map((item) => (
        <div className={style.sizeimg} key={item.id}>
            <div className={style.size}>
                <div className={style.positionicon}>
                    <i className={style.icon}>{item.icon}</i>
                </div>
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <h5>{item.price}</h5>
                <div className={style.downblockcontent}>
                    <button onClick={() => addToCart(item)}>{t("description.addgood")}</button>
                </div>
            </div>
        </div>
    ))

    return (
        <div className={style.item}>
            {itemList}
        </div>
    )
}

ShowDevices.propTypes = {
    cartProducts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
    setCartProducts: PropTypes.func.isRequired
}
export default ShowDevices;