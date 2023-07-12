import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createGroup, fetchGroup, fetchGroups, getGroup, updateGroup} from '../../store/groups'


export default function GroupForm ( { userId, groupId, handleCoolClick } ) {

    //DEPENDENCIES
    const dispatch = useDispatch();

    let group = useSelector(getGroup(groupId));
    const formType = (groupId !== undefined ? 'Edit Group' : 'Create Group');
    const sessionUser = useSelector(state => state.session.user);

    const [name, setName] = useState('');
    const [members, setMembers] = useState('');
    const [budget, setBudget] = useState('');

    if (formType === 'Create Group') {
        group = {
            name: '',
            members: 1,
            budget: 0,
            owner: userId
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newGroup = {
            ...group,
            name,
            members,
            budget,
            owner: userId
        }

        if (newGroup !== undefined && formType === 'Create Group') {
            dispatch(createGroup(newGroup))
            handleCoolClick(e)
        } else {
            dispatch(updateGroup(newGroup))
        }
        dispatch(fetchGroups(userId))
    }

    useEffect(()=> {
        // if (formType === 'Edit Group') {
        if (groupId && userId) {
            dispatch(fetchGroup(groupId, userId));
        }
    }, [dispatch, groupId, userId])
    
    useEffect(()=> {
        if (group) {
            setName(group.name);
            setMembers(group.members);
            setBudget(group.budget);
        }
    }, [group])

    return (
        <form className='group-form' onSubmit={handleSubmit}>
            <h2>
                {formType}
            </h2>

            <section className='group-name'>
                <label>
                    <input
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    placeholder="Group Name"
                    />
                </label>
            </section>

            <section className='group-members'>
                <label>
                    <input
                    type="number"
                    value={members}
                    min="1"
                    onChange={(e)=> setMembers(e.target.value)}
                    placeholder="# of people"
                    />
                </label>
            </section>

            <section className='group-budget'>
                <label>
                    <input
                    type="number"
                    value={budget}
                    onChange={(e)=> setBudget(e.target.value)}
                    placeholder="Budget"
                    />
                </label>
            </section>

            <button className='submit-group'>
                {formType}
            </button>

        </form>
    )
}
