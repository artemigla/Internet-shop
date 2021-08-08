import React, { useEffect, useState } from 'react';
import style from './Styles/Home.module.scss';
import Mobiledevices from '../../Goods/Mobiledevices.js';
import { useTranslation } from "react-i18next";
import ShowDevices from './ShowDevices';
import Pagination from '../pagination/Pagination';

const Home = () => {

    const { t } = useTranslation();
    const [cartProducts, setCartProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [sortContent, setSortContent] = useState(Mobiledevices);
    const [price, setPrice] = useState(true);
    const [nameProduct, setNameProduct] = useState(true);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [cartPerPage] = useState(10);

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
        const sortByName = sortContent.sort((a, b) => {
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
    }

    useEffect(() => {
        const getCountries = () => {
            setLoading(true);
            setCartProducts(Mobiledevices);
            setLoading(false);
        }
        getCountries();
    }, []);

    const lastPageIndex = currentPage * cartPerPage;
    const firstPageIndex = lastPageIndex - cartPerPage;
    const currentCountry = cartProducts.slice(firstPageIndex, lastPageIndex);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className={style.plane}>
            <div className={style.grid}>
                <ShowDevices cartProducts={currentCountry} loading={loading} search={search} setCartProducts={setCartProducts} />
                <Pagination cartPerPage={cartPerPage} totalCart={cartProducts.length} paginate={paginate} />
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