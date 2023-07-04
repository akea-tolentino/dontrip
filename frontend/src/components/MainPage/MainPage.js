import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash/Splash';
import { DoubleImageCarousel } from './DoubleImageCarousel/DoubleImageCarousel';



export const MainPage = () => {

    return (
        <>
            <Splash/>
            <DoubleImageCarousel />
        </>
    )
}