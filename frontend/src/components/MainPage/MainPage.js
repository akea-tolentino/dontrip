import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash/Splash';
import { DoubleImageCarousel } from './DoubleImageCarousel/DoubleImageCarousel';
import Experiences from './Experiences/Experiences';



export const MainPage = () => {

    return (
        <>
            <Splash/>
            <DoubleImageCarousel />
            {/* <Experiences/> */}
        </>
    )
}