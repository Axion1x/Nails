'use client'

import React, {useState} from 'react';
import style from './registration.module.scss';
import main from '../../styles/style.module.scss';
import InputMask from 'react-input-mask';
import {useSelector} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ServicesInput from "@/components/registration/ServiсesInput";



const Registration = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const list = useSelector(state => state.services);

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
    };

    return (
        <div>
            <h1 className={main.title}>Зробити онлайн запис</h1>
            <div className={style.container}>
                <form className={style.form}>
                    <ServicesInput initialState={list} />

                    <div className="button"></div>
                    <div className={style.dataTime}>
                        <div className={style.datePicker}>Оберіть дату</div>
                        <div className={style.timePicker}>Оберіть годину</div>
                    </div>
                    <div className={style.dataInputContainer}>
                        <InputMask
                            className={style.dataInput}
                            mask="+38 (999) 999-99-99"
                            maskChar="_"
                            placeholder="phone"
                            id="phone"
                            name="phone"
                            value={phoneNumber}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                        />
                    </div>
                    <input type="text" placeholder="Ім'я" className={style.dataInput}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
