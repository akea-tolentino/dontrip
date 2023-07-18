import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getItinerary, patchItinerary } from "../../store/itinerary";
import { useState } from "react";


export const ItineraryShow = ({tripId, itineraryId, userId, loading, changeLoading}) => {

    const dispatch = useDispatch();

    const itinerary = useSelector(state => state.itinerary)

    const [deleteEvent, setDeleteEvent] = useState(false) 


    useEffect(() => {
        dispatch(getItinerary(itineraryId)) 
    }, [dispatch, deleteEvent]) 

    const handleEventDelete = async (index) => {
        itinerary.events = itinerary.events.slice(0, index).concat(itinerary.events.slice(index + 1))

        const itineraryBody = {
            events: itinerary.events,
            stays: itinerary.stays
        };
        const res = await dispatch(patchItinerary(itineraryBody, itineraryId));

        if (deleteEvent) {
            setDeleteEvent(false)
        } else {
            setDeleteEvent(true)
        }
        

    };




    
    return (
        <>
            {loading ? <h1>Events Loading...</h1> :
            <div className="cool-interary-show-page">
                <h2>Events</h2>
                {itinerary.events.map( (event, index) => {
                    return (
                        <>
                            <h2>{event.description}</h2>
                            { event.address.slice(0, 8) === "http://" ?
                            <h3><a href={`${event.address}`} className="user-itinerary-show-events" target="_blank" referrerPolicy="no-referrer" rel="noopener noreferrer" >{event.address}</a></h3>
                            :  <h3><a href={`https://${event.address}`} className="user-itinerary-show-events" target="_blank" referrerPolicy="no-referrer" rel="noopener noreferrer" >{event.address}</a></h3>}
                            <button onClick={() => handleEventDelete(index)}>Delete Event</button>
                        </>
                    )
                }) }               
            </div>  }


        </>
    )
}

