import React from 'react';
import style from './homepage.module.scss'
import Header from "@/components/header/Header";
import Accordion from "@/components/accordion/Accordion";
import Table from "@/components/table/Table";
import Registration from "@/components/registration/Registration";
import Gallery from "@/components/photos/Gallery";
import Footer from "@/components/Location/Footer"
const Homepage = () => {

    return (
        <div className={style.container}>
            <Header />
            <Accordion />
            <Table />
            <Registration />
            <Gallery />
            <Footer />

        </div>
    );
};

export default Homepage;