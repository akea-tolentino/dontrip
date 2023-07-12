import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getItinerary } from "../../store/itinerary";



export const ItineraryShow = ({tripId, itineraryId, userId}) => {

    const dispatch = useDispatch();

    const itinerary = useSelector(state => state.itinerary)


    useEffect(() => {
        dispatch(getItinerary(itineraryId))
    }, [dispatch])


    return (
        <>
            {itinerary.events ? 
            <div className="cool-interary-show-page">
                <h2>Events</h2>
                {itinerary.events.map( event => {
                    return (
                        <>
                            <h2>{event.description}</h2>
                            <p>{event.address}</p>
                        </>
                    )
                }) }               
            </div> 
            : null }

        </>
    )
}