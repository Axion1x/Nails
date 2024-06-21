'use client';
'use strict';

import React, { useState } from 'react';
import style from "@/components/accordion/accordion.module.scss";
import main from '../../styles/style.module.scss'

const AccordionItem = ({image, title, subtitle, isActive, onItemClick}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    const formattedTitle = title.replace(/<br\s*\/?>/gi, '<br />'); // Додали пробіли навколо тегу <br />

    return (
        <div
            className={`${style.item} ${isActive ? style.active : ''}`}
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            onClick={() => {
                onItemClick();
                toggleOpen();
            }}
        >
            <div className={style.title} dangerouslySetInnerHTML={{__html: formattedTitle}}/>
            <div className={`${style.subtitle} ${isActive? style.open : ''}`}>
                {subtitle}<br />
                <div className={style.button}>Є запитання?</div>
            </div>

        </div>
    );
}


const Accordion = () => {
    const [activeItem, setActiveItem] = useState(2);
    const handleItemClick = (index) => {
        setActiveItem(index);
    }

    const items = [
        {
            image: './img/acc1.png',
            title: 'Дезінфекція',
            subtitle: "Welcome to my website. I create designs for your pleasure and beauty. Just pick a time that\'s convenient for you, and I\'ll take care of the rest.",
        },
        {
            image: './img/acc3.png',
            title: 'Промивання',
            subtitle: "Welcome to my website. I create designs for your pleasure and beauty. Just pick a time that\'s convenient for you, and I\'ll take care of the rest.",
        },
        {
            image: './img/acc2.png',
            title: 'Зберігання',
            subtitle: "Welcome to my website. I create designs for your pleasure and beauty. Just pick a time that\'s convenient for you, and I\'ll take care of the rest.",
        },
        {
            image: './img/acc4.png',
            title: `Одноразові <br> матеріали`,
            subtitle: "Welcome to my website. I create designs for your pleasure and beauty. Just pick a time that\'s convenient for you, and I\'ll take care of the rest.",
        }
    ]

    return (
        <div className={style.accordionContainer}>
            <h1 className={main.title}>Стерилізація інструментів</h1>
            <div className={style.list}>
                {items.map((item, index) => (
                    <AccordionItem
                        key={index}
                        image={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        isActive={index === activeItem}
                        onItemClick={() => handleItemClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Accordion;
