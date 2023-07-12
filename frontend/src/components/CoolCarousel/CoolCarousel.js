import Carousel from 'react-spring-3d-carousel';
import "./CoolCarousel.css"
import { useState } from 'react';
import { Modal } from '../context/Modal';
import { TripShow } from '../TripShow/TripShow';
import { useDispatch } from 'react-redux';
import { deleteTrip } from '../../store/trips';



export const CoolCarousel = ({userTrips, userId}) => { 

  const dispatch = useDispatch();

  const [showItineraryModal, setShowItineraryModal] = useState(false);

  const [currentTripId, setCurrentTripId] = useState("")

  const images = {
    Ski: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/ski.png',
    Lake: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/lake.png',
    Beach: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/beach.png',
    Surf: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/surf.png',
    Clubbing: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/clubbing.png',
    Backpacking: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/backpacking.png',
    Camping: 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/camping.png',
    "Wine tasting": 'https://dontrip-seeds.s3.us-west-1.amazonaws.com/dontrip/winetasting.png'

  };


 
  const [goToSlide, setGoToSlide] = useState(0)

  const onSlideCLick = (index) => {
    setGoToSlide(index)
  }

  const handledTripEdit = (trip) => {
    setCurrentTripId(trip._id)
    setShowItineraryModal(true)

  }

  const handleDeleteTrip = (trip) => {
    debugger
    dispatch(deleteTrip(trip._id, userId));

}

  const slides = []
  if (userTrips) {
    userTrips.map( (trip, index) => {
      slides.push({
        key: index,
        content: (
        <div className='cool-image-container'>
          <img onClick={() => onSlideCLick(index)} className='cool-images' src={images[trip.experience]} alt={trip.experience} />
          <p>{trip.experience}</p>
          <p>{trip.month}</p>
          <p>{trip.location}</p>
          <button onClick={() => {handledTripEdit(trip)}} id="trip-edit-button">Itinerary</button>
          <button onClick={() => {handledTripEdit(trip)}} id="trip-edit-button">Event</button>
          <button onClick={() => {handleDeleteTrip(trip)}} id="trip-edit-button">Delete Trip</button>
        </div>
        )
        
      }) 
    })

  }
  

  return (
    <>
      <div>
        <div className='cool-carousel-2'>
          <Carousel goToSlide={goToSlide} slides={slides} offsetRadius={4} enableSwipe={true} />
        </div>
        {console.log(showItineraryModal)}
        {showItineraryModal && (<Modal onClose={() => setShowItineraryModal(false)}>
          <TripShow tripId={currentTripId} userId={userId}/>
        </Modal>)}        
      </div>

    </>
  )

}