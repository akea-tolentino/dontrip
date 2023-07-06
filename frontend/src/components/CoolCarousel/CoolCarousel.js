import Carousel from 'react-spring-3d-carousel';
import "./CoolCarousel.css"
import { useState } from 'react';


export const CoolCarousel = () => {

  const [goToSlide, setGoToSlide] = useState(0)

  const slides = [
    {
      key: 1,
      content: <img onClick={() => setGoToSlide(0)} className='cool-images' src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/ski.png'} alt="snow"/>
    },
    {
      key: 2,
      content: <img onClick={() => setGoToSlide(1)} className='cool-images' src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/lake.png'} alt="lake"/>
    },
    {
      key: 3,
      content: <img onClick={() => setGoToSlide(2)} className='cool-images' src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/beach.png'} alt="beach"/>   
    },
    {
      key: 4,
      content: <img onClick={() => setGoToSlide(3)} className='cool-images' src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/surf.png'} alt="surf"/>     
    },
    {
      key: 5,
      content: <img onClick={() => setGoToSlide(4)} className='cool-images' src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/clubbing.png'} alt="clubbing"/>    
    },
    {
      key: 6,
      content: <img onClick={() => setGoToSlide(5)} className='cool-images' src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/backpacking.png'} alt="backpacking"/>  
    },
    {
      key: 7,
      content: <img onClick={() => setGoToSlide(6)} className='cool-images' src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/camping.png'} alt="camping"/>     
    },
    {
      key: 8,
      content: <img onClick={() => setGoToSlide(7)} className='cool-images' src={'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/winetasting.png'} alt="wine tasting"/> 
    }
  ]
  return (
    <>
      <Carousel goToSlide={goToSlide} slides={slides} offsetRadius={4} enableSwipe={true} />
    </>
  )

}