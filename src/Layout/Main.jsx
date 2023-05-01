import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import HeaderMenu from '../Components/HeaderMenu';
import SliderSwiper from '../Components/Slider/SliderSwiper';

const Main = () => {
    const placeData = useLoaderData();
    console.log(placeData);
    return (
        <div className='relative'>
            <HeaderMenu></HeaderMenu>
            <SliderSwiper></SliderSwiper>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;