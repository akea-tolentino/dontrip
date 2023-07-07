import Carousel from 'react-spring-3d-carousel';
import "./CoolCarousel.css"
import { useState } from 'react';


export const CoolCarousel = ({userTrips}) => {

  const images = {
    Ski: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/ski.png',
    Lake: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/lake.png',
    Beach: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/beach.png',
    Surf: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/surf.png',
    Clubbing: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/clubbing.png',
    Backpacking: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/backpacking.png',
    Camping: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/camping.png',
    "Wine tasting": 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/winetasting.png'

  }



  const [goToSlide, setGoToSlide] = useState(0)

  const slides = []
  if (userTrips) {
    userTrips.map( (trip, index) => {
      slides.push({
        key: index,
        content: (
        <div className='cool-image-container'>
          <img onClick={() => setGoToSlide(index)} className='cool-images' src={images[trip.experience]} alt={trip.experience} />
          <p>{trip.experience}</p>
          <p>{trip.month}</p>
          <p>{trip.location}</p>
  
        </div>
        )
        
      }) 
    })

  }
  

  return (
    <>
      <div className='cool-carousel-2'>
        <Carousel goToSlide={goToSlide} slides={slides} offsetRadius={4} enableSwipe={true} />
      </div>
      
    </>
  )

}