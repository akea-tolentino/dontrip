import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash/Splash';
import { DoubleImageCarousel } from './DoubleImageCarousel/DoubleImageCarousel';
import Experiences from './Experiences/Experiences';
import GlobePage from '../Globe/Globe';

export const MainPage = () => {

    return (
        <>
            <Splash/>
            <DoubleImageCarousel />
            {/* <Experiences/> */}
            {/* <GlobePage/> */}
        </>
    )
}