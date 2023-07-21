import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getItinerary, patchItinerary } from "../../store/itinerary";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const ItineraryShow = ({tripId, itineraryId, userId, loading, changeLoading}) => {

    const dispatch = useDispatch();
    const itinerary = useSelector(state => state.itinerary)

    const [deleteEvent, setDeleteEvent] = useState(false);
    const [dropDown, setDropDown] = useState(false);

    const [event, setEvent] = useState('');
    const [site, setSite] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [selectedEvents, setSelectedEvents] = useState([]);

    const handleCreateEvent = (e) => {
        e.preventDefault();
        let id = selectedEvents.length + 1;
        let newEvent = {
           id: id, description: event, address: site, cost: price
        }
        setSelectedEvents([...selectedEvents, newEvent]);
        setEvent('');
        setSite('');
        setPrice('')
    }


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

    const handleAdd = () => {
        if (!dropDown) {
            setDropDown(true)
        } else {
            setDropDown(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const itineraryBody = {
            events: itinerary.events,
            stays: itinerary.stays
        }; 

        itineraryBody.events.push({description: event, address: site, date: date, price: price})
        
        const res = dispatch(patchItinerary(itineraryBody, itineraryId));

        setEvent('');
        setSite('');
        setDate('');
        setPrice('');

        if (deleteEvent) {
            setDeleteEvent(false)
        } else {
            setDeleteEvent(true)
        }
    }

    
    return (
        <>
            {loading ? <h1>Events Loading...</h1> :
            <div className="cool-interary-show-page">
                <h2>Events</h2>
                {itinerary.events.map( (event, index) => {
                    return (
                        <div className="event-show">
                            <h2>{event.description}</h2>
                            { event.address.slice(0, 8) === "http://" ?
                            <h3><a href={`${event.address}`} className="user-itinerary-show-events" target="_blank" referrerPolicy="no-referrer" rel="noopener noreferrer" >{event.address}</a></h3>
                            :  <h3><a href={`https://${event.address}`} className="user-itinerary-show-events" target="_blank" referrerPolicy="no-referrer" rel="noopener noreferrer" >{event.address}</a></h3>}
                            <button onClick={() => handleEventDelete(index)}>Delete Event</button>
                        </div>
                    )
                }) }               
                <button onClick={handleAdd} id="add-event-show">
                    {dropDown? 'Cancel Create Event' : 'Create Event'}
                </button>
            </div>  }

            {dropDown && (
            <form className="dropdown-show" onSubmit={handleSubmit}>
                {/* <div className="x" onClick={()=>setDropDown(false)}>
                    X
                </div> */}
                <label>Event <input value={event} type="text" required onChange={(e)=>setEvent(e.target.value)}/>
                </label>
                <br/>

                <label>Website <input type="text" value={site} placeholder="www." onChange={(e)=>setSite(e.target.value)} required/>
                </label>
                <br/>

                <label>Date <input value={date} type="date" onChange={(e)=>setDate(e.target.value)}/>
                </label>
                <br/>

                <label>Price <input type="integer" value={price} placeholder="$" onChange={(e)=>setPrice(e.target.value)}/>
                </label>
                <br/>

                <div className="add-event-button">
                    <button onClick={handleSubmit}>
                        Add Event
                    </button>
                </div>
            </form>
        )}
        </>
    )
}

