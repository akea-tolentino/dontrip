import React from 'react';
import ReactDOM from 'react-dom';

import InfiniteCarousel from 'react-leaf-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainPage.css"

export const MainPage = () => {
    var settings1 = {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
    };
    var settings2 = {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        rtl: true
    };
    return (
        <>
            <div className='cool-slider-1'>
                <Slider  {...settings1}>
                    <div>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1682686578601-e7851641d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1682686578601-e7851641d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://plus.unsplash.com/premium_photo-1669050702468-d91e80be4126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://plus.unsplash.com/premium_photo-1669050702468-d91e80be4126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1682686578601-e7851641d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1682686578601-e7851641d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>

                </Slider>
            </div>
            <div className='cool-slider-2'>
                <Slider  {...settings2}>
                    <div>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1682686578601-e7851641d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1682686578601-e7851641d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://plus.unsplash.com/premium_photo-1669050702468-d91e80be4126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://plus.unsplash.com/premium_photo-1669050702468-d91e80be4126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1682686578601-e7851641d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1682686578601-e7851641d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
                        />
                    </div>

                </Slider>
            </div>
        </>
    )
}