import React from 'react';
import { useLoaderData } from 'react-router';
import HeaderMenu from '../Components/HeaderMenu';
import SliderSwiper from '../Components/Slider/SliderSwiper';

const Main = () => {
    const placeData = useLoaderData();
    console.log(placeData);
    return (
        <div className='relative'>
            <HeaderMenu></HeaderMenu>
            <SliderSwiper></SliderSwiper>
        </div>
    );
};

export default Main;