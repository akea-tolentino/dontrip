import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchGroups, getUserGroups } from '../../store/groups';
import GroupItem from './GroupItem';
import GroupForm from './GroupForm';
import { createTrip } from '../../store/trips';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function GroupIndex ( props ) {

    const history = useHistory();
   
    //VARIABLES FROM PREVIOUS QUERIES
    const experience = props.location.state.experience;
    const month = props.location.state.month;
    const location = props.location.state.location;
    const itineraryId = props.location.state.itinerary;
    const userId = props.location.state.userId;

    //DEPENDENCY
    const dispatch = useDispatch();

    //CUSTOM SELECTOR TO GET USER GROUPS
    let groups = useSelector(state => state.groups[userId])

    //FETCH GROUPS EVERY LOAD
    useEffect(()=> {
        dispatch(fetchGroups(userId));
    }, [dispatch, userId])

    //STATE VARIABLE FOR USER GROUP INPUT
    const [userGroup, setUserGroup] = useState()


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
            owner: userId
        }

        const res = await dispatch(createTrip(tripData));

        return history.push(`/users/${userId}/trips`)
    }


  
    return (
        <>
            <div className='group-index-page-wrapper'>   
                <section className="group-index-container">
                    <form onSubmit={handleSubmit}>
                        <GroupForm userId={userId}/>
                        {groups === undefined ?
                            <p>no groups yet!</p> :
                            <ul>
                                {groups.map(group =>{
                                    return (
                                        <li>
                                            <GroupItem key={group._id} group={group} />
                                            <input name='location-radio' id={group._id} type='radio' 
                                            onClick={handleRadioClick} className='radio'
                                            />
                                                <label >
                                                    cool
                                                </label>
                                            
                                        </li>
                                    )
                                }
                                )}
                            
                            </ul>
                        }  
                        <button type='Submit'>Submit Trip</button>                      
                    </form>

                </section>
            </div>
        </>
    )
}