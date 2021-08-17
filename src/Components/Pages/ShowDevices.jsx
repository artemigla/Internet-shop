import React from 'react';
import style from './Styles/Home.module.scss';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
const ShowProduct = ({ addToCart, currentProducts, loading, search }) => {
    const { t } = useTranslation();

    if (loading) {
        <h3>Loading...</h3>
    }

    const itemList = currentProducts.filter((item) => {
        if (search === "") {
            return item;
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
        return 0;
    }).map((item) => {
        return (
            <div className={style.sizeimg} key={item.id}>
                <div className={style.size}>
                    <div className={style.positionicon}>
                        <i className={style.icon}>{item.icon}</i>
                    </div>
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                    <h5>{item.price}</h5>
                    <div className={style.downblockcontent}>
                        <button onClick={() => addToCart(item)} >{t("description.addgood")}</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={style.item}>
            {itemList}
        </div>
    )
}

ShowProduct.propTypes = {
    addToCart: PropTypes.func.isRequired,
    currentProducts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired
}
export default ShowProduct;