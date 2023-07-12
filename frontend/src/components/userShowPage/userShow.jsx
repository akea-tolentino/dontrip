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
             <div>
                <section>
                    <span>No trips made yet.</span>
                </section>
                <button onClick={handleCreateNewMemory}>Create Trip</button>
             </div> 
            }
        </>

    )
}
