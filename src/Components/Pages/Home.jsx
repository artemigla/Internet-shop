import React, { useEffect, useState } from 'react';
import style from './Styles/Home.module.scss';
import Mobiledevices from '../../Goods/Mobiledevices.js';
import { useTranslation } from "react-i18next";
import ShowProduct from './ShowDevices';
import Pagination from '../pagination/Pagination';
const Home = () => {

    const { t } = useTranslation();
    const [cartProducts, setCartProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [allCart, setAllCart] = useState(Mobiledevices);
    const [price, setPrice] = useState(true);
    const [nameProduct, setNameProduct] = useState(true);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [cartPerPage] = useState(8);
    const [basket, setBasket] = useState([]);
    const sortProductByPrice = () => {
        const sortByCost = allCart.sort((a, b) => {
            if (parseInt(a.price) < parseInt(b.price)) {
                return -1;
            }
            if (parseInt(a.price) > parseInt(b.price)) {
                return 1
            }
            return 0;
        })
        setAllCart(sortByCost)
        setPrice(!price);
    }

    const SortProductByName = () => {
        const sortByName = allCart.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        setAllCart(sortByName);
        setNameProduct(!nameProduct)
    };

    const addToCart = (product) => {
        let newCart = [...currentProducts];
        let itemInCart = newCart.find((item) => item.id === product.id);

        setBasket([...basket, itemInCart])
        localStorage.setItem("basket", JSON.stringify([...basket, product]));
    };

    useEffect(() => {
        const getCarts = () => {
            setLoading(true);
            setCartProducts(allCart);
            setLoading(false);
        }
        getCarts();
    }, [allCart]);

    const lastPageIndex = currentPage * cartPerPage;
    const firstPageIndex = lastPageIndex - cartPerPage;
    const currentProducts = cartProducts.slice(firstPageIndex, lastPageIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    return (
        <div className={style.plane}>
            <div className={style.grid}>
                <ShowProduct addToCart={addToCart} currentProducts={currentProducts} loading={loading} search={search} />
                <Pagination cartPerPage={cartPerPage} totalCart={cartProducts.length} paginate={paginate} />
            </div>
            <div className={style.rightsidebar}>
                <div className={style.navrightsidebar}>
                    <div>
                        <select>
                            <option onClick={sortProductByPrice} >{t("description.sortprice")}</option>
                            <option onClick={SortProductByName} >{t("description.sortname")}</option>
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