import { useEffect, useState } from "react"
import SelectEvents from "./Events/SelectEvents";
import SelectStays from "./Stays/SelectStays";
import './Itinerary.css'
import { useDispatch, useSelector } from "react-redux";
import { postItinerary } from "../../store/itinerary";
import { getCurrentUser } from "../../store/session";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



export default function Itinerary ( props ) {

    //dependent functions
    const history = useHistory();
    const dispatch = useDispatch();

    //VARIABLES FROM PREVIOUS QUERIES
    const experience = props.location.state.experience;
    const location = props.location.state.location;
    const month = props.location.state.month;
    const events = props.location.state.params
    const stays = props.location.state.params

    //STATE VARIABLE FOR STAYS
    const [staysList, setStaysList] = useState([])
    const [currentPage, setCurrentPage] = useState("event")

    //GETS USER FROM CURRENT USER
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getCurrentUser())
    }, [dispatch])


    //ON SUBMIT FOR ITINERARIES
    const changeEvents = async (eventsArray) => {

        //takes in events array and makes a itinerary body
        const itineraryBody = {
            events: eventsArray,
            stays: staysList
        }
        console.log(month)
        //dispatches itinerary post request
        //no matter what any TA might say, this await is indeed doing something
        const res = await dispatch(postItinerary(itineraryBody, user._id));
        const id = await res._id

        return history.push("/groups", {itinerary: id, location: location, experience: experience, month: month, userId: user._id})
    }


    let showCurrentPage;
    if (currentPage === "event") {
        showCurrentPage = <SelectEvents changeEvents={changeEvents} availableEvents={events} experience={experience} location={location} month={month} />
    } else if (currentPage === "stay") {
        showCurrentPage = <SelectStays changeEvents={changeEvents} availableStays={stays} experience={experience} location={location} month={month} />
    } else {
        showCurrentPage = null
    }


    return (
        <>

            <div className="itinerary-page-h1">
                <h1>Create your Itinerary</h1>
            </div>

            <div className="itinerary-page-container">
                {showCurrentPage}
            </div>

        </>
    )
}
