import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createGroup, fetchGroup, getGroup, updateGroup} from '../../store/groups'

export default function GroupForm ( { groupId } ) {
    const dispatch = useDispatch();
    let group = useSelector(getGroup(groupId));
    const formType = (groupId !== undefined ? 'Edit Group' : 'Create Group');
    const sessionUser = useSelector(state => state.session.user);
    const [showForm, setShowForm] = useState(true);

    if (formType === 'Create Group') {
        group = {
            name: '',
            members: 1,
            budget: 0,
            owner: sessionUser.id
        }
    }

    useEffect(()=> {
        if (formType === 'Edit Group') {
            dispatch(fetchGroup(groupId))
        }
    }, [groupId, dispatch])

    const [name, setName] = useState(group.name);
    const [members, setMembers] = useState(group.members);
    const [budget, setBudget] = useState(group.budget);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newGroup = {
            ...group,
            name,
            members,
            budget,
            owner: sessionUser.id
        }

        if (newGroup !== undefined && formType === 'Create Group') {
            dispatch(createGroup(newGroup))
        } else {
            dispatch(updateGroup(newGroup))
        }
    }

    return (
        <form className='group-form'>
            <h2>{formType}</h2>
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
            <button className='submit-group'>{formType}</button>
        </form>
    )
}