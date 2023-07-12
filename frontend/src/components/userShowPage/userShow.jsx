import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserTrips } from "../../store/trips";
import { CoolCarousel } from "../CoolCarousel/CoolCarousel";

import "./userShow.css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function UserShowPage () {

    const history = useHistory();

    const dispatch = useDispatch();
    const { userId } = useParams();
    const userTrips = useSelector(state => Object.values(state.trips));

    useEffect(() => {
        dispatch(fetchUserTrips(userId))
    }, [dispatch])

    const handleCreateNewMemory = () => {
        return history.push("/experiences")
    }

    return (
        <>
            {userTrips.length > 0 ?
            <>
                <div className="user-show-container">
                    < CoolCarousel userTrips={userTrips} userId={userId}/>
                    <button onClick={handleCreateNewMemory}>Create a new Memory</button>                  
                </div>

            </>
             :
             <div className="user-no-trips-show-page">
                <section className="user-no-trips-show-container">
                    <img className="cooler-image" src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                    <span className="cooler-text">No trips made yet. Click below to create a new everlasting memory! </span>
                </section>
                <button className="cooler-button" onClick={handleCreateNewMemory}>Create a new Memory</button>
             </div> 
            }
        </>

    )
}
