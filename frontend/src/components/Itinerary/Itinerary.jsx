import { useState } from "react"
import SelectEvents from "./Events/SelectEvents";
import SelectStays from "./Stays/SelectStays";
import './Itinerary.css'

export default function Itinerary ( props ) {
    debugger
    const [showEvents, setShowEvents] = useState(true);
    const [showStays, setShowStays] = useState(false);

    const [eventsList, setEventsList] = useState([]);
    const [staysList, setStaysList] = useState([])

    const experience = props.location.state.experience;
    const location = props.location.state.location;
    const month = props.location.state.month;
    const events = props.location.state.params

    const handleEventsClick = () => {
        showEvents ? setShowEvents(false) : setShowEvents(true)
    }

    const handleStaysClick = () => {
        showStays ? setShowStays(false) : setShowStays(true)
    }

    const changeEvents = (eventsArray) => {
        setEventsList(eventsArray)
        debugger
    }


    return (
        <>

        <div className="itinerary-page-h1">
            <h1>Create your Itinerary</h1>
        </div>

        <div className="itinerary-page-container">

            {showEvents &&
            <SelectEvents changeEvents={changeEvents} availableEvents={events} experience={experience} location={location} month={month} /> }

            {showStays && 
            <SelectStays  /> }
        </div>

        </>
    )
}