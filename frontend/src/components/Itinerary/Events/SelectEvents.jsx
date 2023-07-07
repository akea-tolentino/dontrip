import React, { useEffect } from "react";
import { useState } from "react";

export default function SelectEvents ( { availableEvents } ) {
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [selectedEventsDescription, setSelectedEventsDescription] = useState([]);
    const [dropDown, setDropDown] = useState(false);


    const handleClick = (e, event) => {
        e.preventDefault();
        if (selectedEventsDescription.includes(event.activity)) {
            const updatedSelectedEvents = selectedEvents.filter((selectedEvent) => selectedEvent.id !== event.id);
            setSelectedEvents(updatedSelectedEvents);
            setSelectedEventsDescription(updatedSelectedEvents.map((e) => e.activity));
        } else {
            setSelectedEvents((prevSelectedEvents) => [...prevSelectedEvents, event]);
            setSelectedEventsDescription((prevSelectedEventsDesc) => [...prevSelectedEventsDesc, event.activity]);
        }
    }

    const handleDelete = (e, event) => {
        e.preventDefault();
        debugger
        const updatedSelectedEvents = selectedEvents.filter((selectedEvent) => selectedEvent.activity !== event.activity);
        setSelectedEvents(updatedSelectedEvents);
    }

    const [event, setEvent] = useState('');
    const [site, setSite] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');

    const handleCreate = () => {
        if (!dropDown) {
            setDropDown(true)
        } else {
            setDropDown(false)
        }
    }

    const handleCreateEvent = (e) => {
        e.preventDefault();
        let id = selectedEvents.length + 1;
        let newEvent = {
           id: id, activity: event, website: site, price: price
        }
        setSelectedEvents([...selectedEvents, newEvent]);
        setEvent('');
        setSite('');
        setPrice('')
    }    

    return (
        <>
        <section className="select-events-container">
            <h2>Available events</h2>
            <ul className="select-events-list">
                {availableEvents.map(event =>
                <li key={event.id}>
                    <br/>
                    <h3>{event.activity}</h3>
                    <h3>{event.website}</h3>
                    <button className="select-events-add-button" onClick={(e)=>handleClick(e, event)}>
                        {/* {selectedEventsDescription.includes(event.activity) ? "remove" : "add"} */}add
                    </button>
                </li>)}
            </ul>
        </section>

        <div className="itinerary-intro">
            <h3>
                Please choose any number of events to add to your itinerary
            </h3>
        </div>

        <div className="selected-events-container">
            <h2>Selected Events</h2>
            <ul className="selected-events-list">
            {selectedEvents.map(event =>
                <li key={event.id}>
                    <br/>

                    <h3>{event.activity}</h3>
                    <h3>{event.website}</h3>
                    <button className="select-events-add-button" onClick={(e)=>handleDelete(e, event)}>
                        remove
                    </button>
                </li>
                )}
            </ul>
        </div>

        <div className="create-own-event-container">
            <button onClick={handleCreate}>Create your own event</button>
        </div>

        {dropDown && (
            <form className="dropdown">
                <div className="x" onClick={()=>setDropDown(false)}>
                    X
                </div>
                <label>Event
                    <input value={event} type="text" required onChange={(e)=>setEvent(e.target.value)}/>
                </label>
                <br/>

                <label>Website
                    <input type="text" value={site} placeholder="www." onChange={(e)=>setSite(e.target.value)} required/>
                </label>
                <br/>
                
                <label>Date
                    <input value={date} type="date" onChange={(e)=>setDate(e.target.value)}/>
                </label>
                <br/>

                <label>Price
                    <input type="integer" value={price} placeholder="$" onChange={(e)=>setPrice(e.target.value)}/>
                </label>
                <br/>

                <div className="add-event-button">
                    <button onClick={handleCreateEvent}>
                        Add event
                    </button>
                </div>
            </form>
        )}

        <div className="itinerary-submit-button">
            <button>
                don'trip, let's go!
            </button>
        </div>
        </>
    )
}