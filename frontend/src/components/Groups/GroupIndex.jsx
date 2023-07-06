import { useSelector, useDispatch } from 'redux';
import { useEffect } from 'react';
import { fetchGroups } from '../../store/groups';
import GroupItem from './GroupItem';
import GroupForm from './GroupForm';

export default function GroupIndex ( { currentUser } ) {
    const dispatch = useDispatch();
    let groups = useSelector(getUserGroups(currentUser.id))

    useEffect(()=> {
        dispatch(fetchGroups(groups));
    }, [dispatch, groups])

    return (
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
    )
}