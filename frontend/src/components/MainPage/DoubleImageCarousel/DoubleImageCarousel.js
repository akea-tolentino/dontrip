import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DoubleImageCarousel.css"

export const DoubleImageCarousel = () => {

    
    let settings1 = {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        
    };
    let settings2 = {
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
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/club_trip.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/backpacking_trip.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/snow_trip.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/beach_trip.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/lake_trip.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/wine_trip.png"
                        />
                    </div>

                </Slider>
            </div>
            <div className='cool-slider-2'>
                <Slider  {...settings2}>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/surf_trip.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/snow_trip.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/lake_trip.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/wine_trip.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/beach_trip.png"
                        />
                    </div>
                    <div>
                        <img
                            alt=""
                            src="https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/dontrip2/camping_trip.png"
                        />
                    </div>

                </Slider>
            </div>
        </>
    )
}