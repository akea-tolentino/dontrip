import { useEffect, useState } from "react"
import SelectEvents from "./Events/SelectEvents";
import SelectStays from "./Stays/SelectStays";
import './Itinerary.css'
import { useDispatch, useSelector } from "react-redux";
import { postItinerary } from "../../store/itinerary";
import { getCurrentUser } from "../../store/session";


export default function Itinerary ( props ) {

    const dispatch = useDispatch();

    const [showEvents, setShowEvents] = useState(true);
    const [showStays, setShowStays] = useState(false);


    const [staysList, setStaysList] = useState([])

    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getCurrentUser())
    }, [])


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

    const changeEvents = async (eventsArray) => {


        const itineraryBody = {
            events: eventsArray,
            stays: staysList
        }
        dispatch(postItinerary(itineraryBody, user._id));
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