import { useDispatch, useSelector } from "react-redux"
import { deleteTrip } from "../../store/trips";



export const TripShow = ({tripId, userId}) => {

    const dispatch = useDispatch();

    const handleDeleteTrip = (e) => {
        e.preventDefault();
        debugger
        dispatch(deleteTrip(tripId, userId));

    }
    
    return (
        <>
            <h1>Cool Bros</h1>
            <button onClick={handleDeleteTrip}>Delete Trips</button>
        </>
    )
}