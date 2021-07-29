import React, { useState } from 'react';
import style from './Styles/Home.module.scss';
import Mobiledevices from '../../Goods/Mobiledevices.jsx';
import { useTranslation } from "react-i18next";
const Home = () => {

    const { t } = useTranslation();

    const [cartProducts, setCartProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sortContent, setSortContent] = useState(Mobiledevices);
    const [price, setPrice] = useState(true);
    const [nameProduct, setNameProduct] = useState(true);

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
        localStorage.setItem("device", JSON.stringify(newCart));
        setCartProducts(newCart);
    };

    const itemList = sortContent.filter((item) => {
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
                    <i className={style.icon}>{item.icon}</i>
                    <img src={item.img} alt={item.name} />
                    <h4>{item.name}</h4>
                    <h5>{item.price}</h5>
                    <div className={style.downblockcontent}>
                        <button onClick={() => addToCart(item)}>{t("description.addgood")}</button>
                    </div>
                </div>
            </div>
        )
    })

    const SortByCost = () => {
        const sortByCost = Mobiledevices.sort((a, b) => {
            if (parseInt(a.price) < parseInt(b.price)) {
                return -1;
            }
            if (parseInt(a.price) > parseInt(b.price)) {
                return 1
            }
            return 0;
        })
        setSortContent(sortByCost)
        setPrice(!price);
    }

    const SortByName = () => {
        const sortByName = Mobiledevices.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        setSortContent(sortByName);
        setNameProduct(!nameProduct)
    };

    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className={style.plane}>
            <div className={style.grid}>
                <div className={style.item}>
                    {itemList}
                </div>
            </div>
            <div className={style.rightsidebar}>
                <div className={style.navrightsidebar}>
                    <div>
                        <select>
                            <option onClick={SortByCost} >{t("description.sortprice")}</option>
                            <option onClick={SortByName} >{t("description.sortname")}</option>
                        </select>
                    </div>
                </div>
                <div className={style.rightcontent}>
                    <input className={style.searchitem}
                        type="search"
                        placeholder="Search"
                        onChange={handleChange}
                        value={search}
                    />
                </div>
            </div>
        </div>
    )
}
export default Home;