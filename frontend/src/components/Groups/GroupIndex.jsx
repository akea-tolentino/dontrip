import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchGroups, getUserGroups } from '../../store/groups';
import GroupItem from './GroupItem';
import GroupForm from './GroupForm';

export default function GroupIndex ( props ) {
    debugger
    //VARIABLES FROM PREVIOUS QUERIES
    const experience = props.location.state.experience;
    const month = props.location.state.month;
    const location = props.location.state.location;
    const itineraryId = props.location.state.itinerary;
    const userId = props.location.state.userId;

    //DEPENDENCY
    const dispatch = useDispatch();

    //CUSTOM SELECTOR TO GET USER GROUPS
    let groups = useSelector(state => state.groups)

    //FETCH GROUPS EVERY LOAD
    useEffect(()=> {
        dispatch(fetchGroups(userId));
    }, [dispatch, userId])


    debugger
    return (
        <>
            <div className='group-index-page-wrapper'>   
                <section className="group-index-container">
                    <GroupForm />
                    {groups === undefined ?
                        <p>no groups yet!</p> :
                        <ul>
                            {groups.map(group =>
                            <GroupItem key={group.id} group={group} />
                            )}
                        </ul>
                    }
                </section>
            </div>
        </>
    )
}