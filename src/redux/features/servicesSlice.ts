import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        category: 'Тип манікюру',
        data: [
            {name: 'Комбінований', price: '1310'},
            {name: 'Апаратний', price: '120'},
            {name: 'Без подальшого покриття', price: '120'},
            {name: 'Чоловічий', price: '120'},
            {name: 'Класичний', price: '120'}
        ]
    },
    {
        category: 'Види покриття',
        data: [
            {name: 'Покриття лаком', price: '120'},
            {name: 'Покриття звичайним лаком', price: '120'},
            {name: 'Укріплення нігтів гелем', price: '120'},
            {name: 'Укріплення нігтів акриловою пудрою', price: '120'}
        ]
    },
    {
        category: 'Зняття',
        data: [
            {name: 'Зняття гель лаку', price: '120'},
            {name: 'Зняття нарощення', price: '120'},
            {name: 'Зняття без подальшого покриття', price: '120'}
        ]
    },
    {
        category: 'Інші послуги',
        data: [
            {name: 'Всі нігті', price: '120'},
            {name: 'Один ніготь', price: '120'},
            {name: 'Корекція нарощених нігтів', price: '120'}
        ]
    },
    {
        category: 'Декор',
        data: [
            {name: 'Френч втирка', price: '120'},
            {name: 'Принт блискітки декор', price: '120'}
        ]
    }
];

const servicesSlice = createSlice({
    name:'services',
    initialState:initialState,
})

const {actions, reducer} = servicesSlice;
export const {} = actions;
export default reducer