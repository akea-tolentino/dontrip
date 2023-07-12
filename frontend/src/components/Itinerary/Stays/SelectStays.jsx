import React, { useEffect } from "react";
import { useState } from "react";

export default function SelectStays( { changeStays, availableStays, experience, location, month } ) {
    const [selectedStays, setSelectedStays] = useState([]);
    const [selectedStaysDescription, setSelectedStaysDescription] = useState([]);
    const [dropDown, setDropDown] = useState(false);
    const date = new Date().toISOString().split("T")[0];


    const handleClick = (e, stay) => {
        e.preventDefault();
        if (selectedStaysDescription.includes(stay.description)) {
            const updatedSelectedStays = selectedStays.filter((selectedStay) => selectedStay.id !== stay.id);
            setSelectedStays(updatedSelectedStays);
            setSelectedStaysDescription(updatedSelectedStays.map((e) => e.description));
        } else {
            setSelectedStays((prevSelectedStays) => [...prevSelectedStays, stay]);
            setSelectedStaysDescription((prevSelectedStaysDesc) => [...prevSelectedStaysDesc, stay.description]);
        }
    }

    const handleDelete = (e, stay) => {
        e.preventDefault();
        const updatedSelectedStays = selectedStays.filter((selectedStay) => selectedStay.description !== stay.description);
        setSelectedStays(updatedSelectedStays);
    }

    const [stay, setStay] = useState('');
    const [site, setSite] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [price, setPrice] = useState('');

    const handleCreate = () => {
        if (!dropDown) {
            setDropDown(true)
        } else {
            setDropDown(false)
        }
    }

    const handleCreateStay = (e) => {
        e.preventDefault();
        let id = selectedStays.length + 1;
        let newStay = {
           id: id,
           description: stay,
           address: site,
           cost: price
        }
        setSelectedStays([...selectedStays, newStay]);
        setStay('');
        setSite('');
        setPrice('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        changeStays(selectedStays)
    }

    return (
        <>
        {/* <section className="select-stays-container">
            <h2>Available stays</h2>
            <ul className="select-stays-list">
                {availableStays.map(stay =>
                <li key={stay.id}>
                    <br/>
                    <h3>{stay.description} <button className="select-stays-add-button" onClick={(e)=>handleClick(e, stay)}> */}
                        {/* {selectedEventsDescription.includes(event.description) ? "remove" : "add"}select */}
                    {/* </button></h3>
                    <h3><a href={`https://${stay.address}`} target="_blank" referrerPolicy="no-referrer" rel="noopener noreferrer" >{stay.address}</a></h3>
                </li>)}
            </ul>
        </section> */}

        <div className="itinerary-intro">
            <h3>
                Please choose any number of stays to add to your itinerary
            </h3>
            <section className="stay-buttons">
                <div className="create-own-stay-container">
                    <button onClick={handleCreate}>Create Stay</button>
                </div>
                <div className="itinerary-submit-button" onClick={handleSubmit}>
                    <button>
                        Submit Stays
                    </button>
                </div>
            </section>
        </div>

        <div className="selected-stays-container">
            <h2>Selected Stays</h2>
            <ul className="selected-stays-list">
            {selectedStays.map(stay =>
                <li key={stay.id}>
                    <br/>

                    <h3>{stay.description} <button className="select-stays-add-button" onClick={(e)=>handleDelete(e, stay)}>
                        Delete Stay
                    </button></h3>
                    {console.log(stay.address)}
                    <h3><a href={`https://${stay.address}`} target="_blank" referrerPolicy="no-referrer" rel="noopener noreferrer" >{stay.address}</a></h3>
                </li>
                )}
            </ul>
        </div>

        {/* <div className="create-own-event-container">
            <button onClick={handleCreate}>Create your own event</button>
        </div> */}

        {dropDown && (
            <form className="dropdown-stays">
                <div className="x" onClick={()=>setDropDown(false)}>
                    X
                </div>
                <label>Stay
                    <input value={stay} type="text" required onChange={(e)=>setStay(e.target.value)}/>
                </label>
                <br/>

                <label>Website
                    <input type="text" value={site} placeholder="www." onChange={(e)=>setSite(e.target.value)} required/>
                </label>
                <br/>

                <label>Check In Date
                    <input  type="date" max={checkOutDate} min={date} value={checkInDate} onChange={(e)=>setCheckInDate(e.target.value)}/>
                    <p>{console.log(date)}</p>
                </label>
                <br/>

                <label>Check Out Date
                    <input min={checkInDate} value={checkOutDate} type="date" onChange={(e)=>setCheckOutDate(e.target.value)}/>
                </label>
                <br/>

                <label>Price
                    <input type="integer" value={price} placeholder="$" onChange={(e)=>setPrice(e.target.value)}/>
                </label>
                <br/>

                <div className="add-stay-button">
                    <button onClick={handleCreateStay}>
                        Add Stay
                    </button>
                </div>
            </form>
        )}

        {/* <div className="itinerary-submit-button" onClick={handleSubmit}>
            <button>
                don'trip, let's go!
            </button>
        </div> */}
        </>
    )
}
