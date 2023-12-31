import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { deleteGroup, fetchGroup, fetchGroups } from "../../store/groups";
import { patchTrip } from "../../store/trips";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export const GroupShow = ({trip, groupId, userId, handleModalClose}) => {

    const dispatch = useDispatch();
    const history = useHistory();


    const group = useSelector(state => state.groups[groupId] );
    const groups = useSelector(state => state.groups[userId]);

    const [groupName, setGroupName] = useState(group ? group.name : null)
    const [selectGroup, setSelectGroup] = useState(group);

    useEffect(() => {
        dispatch(fetchGroup(groupId, userId));
        dispatch(fetchGroups(userId))
    }, [dispatch])

    const handleGroupEdit = (e) => {
        e.preventDefault()
        const tripData = {
            tripId: trip._id,
            experience: trip.experience,
            month: trip.month,
            location: trip.location,
            itinerary: trip.itinerary,
            group: selectGroup,
            owner: userId
        };

        dispatch(patchTrip(tripData))
        handleModalClose();
    }   

    const handleClick = () => {
       return history.push('/editgroup', {experience: trip.experience, month: trip.month, location: trip.location, itinerary: trip.itinerary, tripId: trip._id})
    }


    return (
        <>
            {(group) ? <div className="cool-group-show-page">
                <h2>Group</h2>
                <p>{group.name}</p>
                <p>{group.members} members</p>
                <p>${group.budget}</p>
            </div> : <h1 className="no-current-group">No Current Group associated</h1> }
            {groups ? 
                <form onSubmit={handleGroupEdit} className="group-form-show">
                    <label>Change your Group
                        <select className="group-select" onChange={(e) => setSelectGroup(e.target.value)}>
                            {groups.map(individualGroup => {
                                return <option value={individualGroup._id}  selected={individualGroup.name === groupName ? true : false} > {individualGroup.name}</option>                     
                            })}                            
                        </select>

                    </label>
                    <br/>
                    { group ? 
                    <button className="change-group-button" type="submit">Change Group</button> : 
                    <button className="change-group-button" type="submit">Select Group</button>}
                    <button className="edit-group-button" onClick={handleClick}>Edit Group</button>
            </form> : null }
  
        </>
    )
}

