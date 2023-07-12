import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getItinerary } from "../../store/itinerary";



export const ItineraryShow = ({tripId, itineraryId, userId}) => {

    const dispatch = useDispatch();

    const itinerary = useSelector(state => state.itinerary)
    debugger

    useEffect(() => {
        dispatch(getItinerary(itineraryId))
    }, [dispatch])


    return (
        <>
            {itinerary.events ? 
            <div>
                <h1>Itinerary</h1>
                <h2>Events</h2>
                {itinerary.events.map( event => {
                    return (
                        <>
                            <h2>{event.description}</h2>
                            <p>{event.address}</p>
                        </>
                    )
                }) }
                <button>Delete Itinerary</button>                
            </div> 
            : null }

        </>
    )
}