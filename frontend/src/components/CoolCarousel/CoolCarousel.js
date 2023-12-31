import Carousel from 'react-spring-3d-carousel';
import "./CoolCarousel.css"
import { useState } from 'react';
import { Modal } from '../context/Modal';
import { ItineraryShow } from '../TripShow/ItineraryShow';
import { useDispatch } from 'react-redux';
import { deleteTrip } from '../../store/trips';
import { GroupShow } from '../TripShow/GroupShow';



export const CoolCarousel = ({userTrips, userId}) => { 

  const dispatch = useDispatch();

  const [showItineraryModal, setShowItineraryModal] = useState(false);

  const [showGroupModal, setShowGroupModal] = useState(false);

  const [currentTripData, setCurrentTripData] = useState(userTrips ? userTrips[0] : {});

  const [currentItineraryId, setCurrentItineraryId] = useState("");

  const [currentGroupId, setCurrentGroupId] = useState("");

  const [loading, setLoading] = useState(true)

  const changeLoading = () => {
    if (loading) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }

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

  const onSlideCLick = (index, trip) => {
    setGoToSlide(index)
    setCurrentTripData(trip)
  };

  const handledItineraryEdit = async (trip) => {
    if (trip._id !== currentTripData._id && slides.length !== 2) return ;
    setCurrentItineraryId(trip.itinerary)
    setShowItineraryModal(true)
    setTimeout(() => {
      changeLoading();
    }, 500)
  };


  const handleGroupEdit = (trip) => {
    if (trip._id !== currentTripData._id && slides.length !== 2) return ;
    setCurrentGroupId(trip.group);
    setShowGroupModal(true);
  }

  const handleDeleteTrip = (trip) => {
    if (trip._id !== currentTripData._id && slides.length !== 2) return ;
    const confirm = window.confirm(`Are you sure you want to delete ${trip.experience} trip of ${trip.month}?`)
    if (confirm) dispatch(deleteTrip(trip._id, userId));
  };

  const handleGroupModalClose = () => {
    setShowGroupModal(false)
  };

  const handleItineraryModalClose = () => {
    setShowItineraryModal(false)
    changeLoading();
  };

  const slides = []
  if (userTrips) {
    userTrips.map( (trip, index) => {
      slides.push({
        key: index,
        content: (
        <div className='cool-image-container'>
          <img onClick={() => onSlideCLick(index, trip)} className='cool-images' src={images[trip.experience]} alt={trip.experience} />
          <p>{trip.experience}</p>
          <p>{trip.month}</p>
          <p>{trip.location}</p>
          <div className='trip-edit-buttons'>
            <button onClick={() => {handledItineraryEdit(trip)}} id="trip-edit-button">Itinerary</button>
            <button onClick={() => {handleGroupEdit(trip)}} id="trip-edit-button">Group</button>
            <button onClick={() => {handleDeleteTrip(trip)}} id="trip-edit-button">Delete Trip</button>
          </div>
        </div>
        )
        
      }) 
    })

  } 
  
  return (
    <>
      <div>
        {slides.length === 2 ? 
        <div className='cool-carousel-3'>
            {slides.map(slide => {
              return <div>{slide.content}</div>
            })}
        </div>:
        <div className='cool-carousel-2'>
          <Carousel goToSlide={goToSlide} slides={slides} offsetRadius={4} enableSwipe={true} />
        </div>}
        {showItineraryModal && (<Modal onClose={handleItineraryModalClose}>
          <ItineraryShow loading={loading} changeLoading={changeLoading} trip={currentTripData} itineraryId={currentItineraryId} userId={userId}/>
        </Modal>)}   
        {showGroupModal && (<Modal onClose={handleGroupModalClose}>
          <GroupShow  trip={currentTripData} groupId={currentGroupId} userId={userId} handleModalClose={handleGroupModalClose}/>
        </Modal>)}      
      </div>

    </>
  )

}