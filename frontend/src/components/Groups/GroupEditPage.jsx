import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchGroups, getUserGroups } from '../../store/groups';
import GroupItem from './GroupItem';
import GroupForm from './GroupForm';
import { createTrip, patchTrip } from '../../store/trips';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Group.css';


export default function GroupEditPage ( props ) {

    const history = useHistory();

    //VARIABLES FROM PREVIOUS QUERIES
    const experience = props.location.state.experience;
    const month = props.location.state.month;
    const location = props.location.state.location;
    const itineraryId = props.location.state.itinerary;
    const tripId = props.location.state.tripId


    const userId = useSelector(state => state.session.user._id)
    //DEPENDENCY
    const dispatch = useDispatch();

    //CUSTOM SELECTOR TO GET USER GROUPS
    const groups = useSelector(state => state.groups[userId])

    //FETCH GROUPS EVERY LOAD
    useEffect(()=> {
        dispatch(fetchGroups(userId));
    }, [dispatch, userId])

    //STATE VARIABLE FOR USER GROUP INPUT
    const [userGroup, setUserGroup] = useState({})
    const [showForm, setShowForm] = useState(false);

    //STATE VARIABLE FOR ERRORS
    const [errors, setErrors] = useState()

    const handleRadioClick = (event) => {
        const selectedGroup = groups.find(group => group._id === event.target.id)
        setUserGroup(selectedGroup)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const tripData = {
            experience: experience,
            month: month,
            location: location,
            itinerary: itineraryId,
            group: userGroup._id,
            owner: userId,
            tripId: tripId
        }

        if (userGroup._id === undefined) {
            setErrors("Please select a Group!");
            return ;
        }
        const res = await dispatch(patchTrip(tripData));


        return history.push(`/users/${userId}/trips`)
    }

    const handleClick = (e) => {
        e.preventDefault();
        (showForm === false) ? setShowForm(true) : setShowForm(false);
    }

    const handleBack = () => {
        return history.goBack();
    }

    return (
        <>
            <div className='group-index-page-wrapper'>
                <section className="group-index-container">
                    <h2>Create / edit / delete a group</h2>

                    <div className='create-group-button'>
                        <button  onClick={handleClick}>Create Group</button>
                    </div>

                        {showForm && (
                            <div className="create-dropdown">
                                <div className="edit-x" onClick={()=>setShowForm(false)}>X</div>

                                <GroupForm userId={userId} handleCoolClick={handleClick} />
                            </div>
                    )}
                    {/* <form> */}
                        {groups === undefined ?
                            <p>no groups yet!</p> :
                            <ul className='group-list'>

                                {groups.map(group =>{
                                    return (
                                        <li className='group-list-item'>
                                            <input name='location-radio' 
                                            id={group._id} 
                                            type='radio' 
                                            onClick={handleRadioClick} className='radio'
                                            />
                                            <GroupItem userId={userId} key={group._id} group={group} />
                                        </li>
                                    )
                                })}
                            {errors ? <h1 className='errors'>{errors}</h1> : null}
                            </ul>
                        }
                    {/* </form> */}
                       

                        <button className="trip-submit" onClick={handleSubmit}>
                            Submit
                        </button>

                </section>

            </div>
        </>
    )
}
