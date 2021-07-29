import { v4 as uuidv4 } from 'uuid';
import { DiAndroid, DiApple } from 'react-icons/di';
import Iphone_5s from './Images/iphone_5S.png';
import Iphone_7 from './Images/iphone_7.png';
import Iphone_11 from './Images/iphone_11.png';
import Xiaomi_R_N_8 from './Images/Xiaomi_Redmi_Note_8.png';
import Xiaomi_R_Pro from './Images/xiaomi-redmi-note-7-pro.png';
import Xiaomi_Mi_Note_10 from './Images/xiaomi_mi_note.png';
import Xiaomi_Redmi_Note_10_Pro from './Images/xiaomi_redmi_note_10_pro.png';
import Xiaomi_redmi_note_9 from './Images/xiaomi_redmi_note_9.png';
import Samsung_galaxy_S8 from './Images/samsung-galaxy-s8.png';
import Samsung_galaxy_note_10 from './Images/samsung_galaxy_note.png';
import Samsung_galaxy_note_20 from './Images/Samsung_galaxy_note_20.png';
import Samsung_Galaxy_S21 from './Images/Samsung_Galaxy_S21.png';
import Samsung_Galaxy_A41 from './Images/Samsung_Galaxy_A41.png';
import Samsung_Galaxy_A71 from './Images/Samsung_Galaxy_A71.png';
import Samsung_Galaxy_A5 from './Images/Samsung_Galaxy_A5.png';
import Huawei_P20 from './Images/Huawei_P20.png';
import Huawei_Nova_3i from './Images/Huawei_Nova_3i.png';
import Huawei_Honor_7 from './Images/Huawei_Honor_7.png';
const Mobiledevices = [
    {
        "id": uuidv4(),
        "img": Iphone_5s,
        "name": "Iphone 5s",
        "price": "100$",
        "icon": <DiApple />
    },
    {
        "id": uuidv4(),
        "img": Huawei_Nova_3i,
        "name": "Huawei Nova 3i",
        "price": "70$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Huawei_Honor_7,
        "name": "Huawei Honor 7",
        "price": "320$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Samsung_Galaxy_A41,
        "name": "Samsung Galaxy A41",
        "price": "180$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Xiaomi_R_N_8,
        "name": "Xiaomi Redmi Note 8",
        "price": "300$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Iphone_11,
        "name": "Iphone 11",
        "price": "1000$",
        "icon": <DiApple />
    },
    {
        "id": uuidv4(),
        "img": Xiaomi_R_Pro,
        "name": "Xiaomi Redmi Note 7",
        "price": "100$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Xiaomi_Mi_Note_10,
        "name": "Xiaomi Mi Note 10",
        "price": "200$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Samsung_galaxy_S8,
        "name": "Samsung Galaxy S8",
        "price": "280$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Xiaomi_redmi_note_9,
        "name": "Xiaomi Redmi Note 9",
        "price": "1000$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Xiaomi_Redmi_Note_10_Pro,
        "name": "Xiaomi Redmi Note 10 Pro",
        "price": "250$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Iphone_7,
        "name": "Iphone 7",
        "price": "300$",
        "icon": <DiApple />
    },
    {
        "id": uuidv4(),
        "img": Iphone_11,
        "name": "Iphone 11",
        "price": "1000$",
        "icon": <DiApple />
    },

    {
        "id": uuidv4(),
        "img": Samsung_galaxy_note_10,
        "name": "Samsung Galaxy Note 10",
        "price": "450$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Samsung_galaxy_note_20,
        "name": "Samsung Galaxy Note 20",
        "price": "900$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Samsung_Galaxy_S21,
        "name": "Samsung Galaxy S21",
        "price": "1000$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Samsung_Galaxy_A71,
        "name": "Samsung Galaxy A71",
        "price": "300$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Samsung_Galaxy_A5,
        "name": "Samsung Galaxy A5",
        "price": "120$",
        "icon": <DiAndroid />
    },
    {
        "id": uuidv4(),
        "img": Huawei_P20,
        "name": "Huawei P20",
        "price": "180$",
        "icon": <DiAndroid />
    }
]

export default Mobiledevices;