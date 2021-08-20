import React, { useState, useEffect } from 'react';
import style from './Styles/Basket.module.scss';
import { MdDelete } from 'react-icons/md'
const Basket = () => {
    const [basket, setBasket] = useState([]);
    const [price, setPrice] = useState(1);
    useEffect(() => {
        const saveTask = localStorage.getItem("basket")
        setBasket(JSON.parse(saveTask))
    }, []);
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket));
    }, [basket]);

    const deleteCart = (id) => setBasket(basket.filter(item => item.id !== id));

    const itemList = basket && basket.length > 0 ? (
        basket.map((item) => {
            return (
                <div className={style.container} key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <div className={style.info}>
                        <h5>Device: {item.name}</h5>
                        <h5>Price: {item.price}</h5>
                    </div>
                    <div className={style.posbtn}>
                        <div className={style.flex}>
                            <button className={style.counterminus} onClick={() => setPrice(price - 1)}>-</button>
                            <p>{price}</p>
                            <button className={style.counterplus} onClick={() => setPrice(price + 1)}>+</button>
                        </div>
                        <MdDelete className={style.btndelete} onClick={() => deleteCart(item.id)} />
                    </div>
                </div>
            )
        })
    ) : (<h3>Cart is empty</h3>)
    return (
        <div className={style.basket}>
            <div className={style.content}>
                {itemList}
            </div>
        </div>
    )
}
export default Basket;