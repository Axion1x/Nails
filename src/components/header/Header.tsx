'use client'
import React from 'react';
import style from "@/components/header/header.module.scss";
import {Parallax} from "react-parallax";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.navbar}>
                <div className={style.logo}>
                    <img src="./svg/logo-white.svg" alt="logo"/>
                </div>
                <ul className={style.list}>
                    <li className={style.item}>Стерилізація</li>
                    <li className={style.item}>Послуги та ціни</li>
                    <li className={style.item}>Фотогалерея</li>
                    <li className={style.item}>Контактна інформація</li>
                </ul>
            </div>

                <div className={style.headerContent}>

                    <div className={style.headerInfo}>
                        <div className={style.title}>Майстер манікюру</div>
                        <div className={style.subtitle}>Ласкаво прошу на мій вебсайт!
                            Створюю дизайни, які не лише приносять задоволення, а й підкреслюють вашу неповторну красу.
                            Запрошуємо вас обрати зручний час, і всі інші деталі – це моя турбота.
                        </div>
                        <div className={style.button}>Хочу манікюр</div>
                    </div>
                    <div className={style.headerImage}>
                        <img src="./img/headerImg.jpg" alt=""/>
                    </div>
                </div>

        </div>
    );
};

export default Header;