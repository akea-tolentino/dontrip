import { useState } from "react"
import SelectEvents from "./Events/SelectEvents";
import SelectStays from "./Stays/SelectStays";
import './Itinerary.css'

export default function Itinerary ( { chatEventsList, chatStaysList } ) {
    const [showEvents, setShowEvents] = useState(true);
    const [showStays, setShowStays] = useState(false);

    const handleEventsClick = () => {
        showEvents ? setShowEvents(false) : setShowEvents(true)
    }

    const handleStaysClick = () => {
        showStays ? setShowStays(false) : setShowStays(true)
    }

    const handleSubmit = () => {

    }

    return (
        <>

        <div className="itinerary-page-h1">
            <h1>Create your Itinerary</h1>
        </div>

        <div className="itinerary-page-container">
            {/* <button className="events-button" onClick={()=> handleEventsClick}>
                Events
            </button> */}

            {showEvents &&
            <SelectEvents availableEvents={chatEventsList} /> }
{/* 
            <button className="stays-button" onClick={()=> handleStaysClick}>
                Stays
            </button> */}

            {showStays && 
            <SelectStays availableStays={chatStaysList} /> }
        </div>

        </>
    )
}