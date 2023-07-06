import { useEffect } from "react";
import { useState } from "react";

export default function SelectEvents ( { availableEvents } ) {

    const [selectedEvents, setSelectedEvents] = useState([])
    
    const handleClick = (e, event) => {
        e.preventDefault();
        selectedEvents.includes(event) ? setSelectedEvents(selectedEvents.splice(event)) : setSelectedEvents(selectedEvents.concat(event))
    }

    useEffect(()=> {
        //refresh render of selected events container every time selected events changes
    }, selectedEvents)

    return (
        <section className="select-events-container">
            <ul className="select-events-list">
                {availableEvents.map(event =>
                <li key={event.id}>
                    <h3>{event.description}</h3>
                    <p>{event.address}</p>
                    <date>{event.date}</date>
                    <button onClick={handleClick}>add</button>
                </li>)}
            </ul>
        </section>
    )
}