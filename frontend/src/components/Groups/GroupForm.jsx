import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createGroup, fetchGroup, fetchGroups, getGroup, updateGroup} from '../../store/groups'

export default function GroupForm ( { userId, groupId } ) {

    //DEPENDENCIES
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
            owner: userId
        }
    }

    useEffect(()=> {
        if (formType === 'Edit Group') {
            dispatch(fetchGroup(groupId))
        }
    }, [groupId, dispatch])

    const [name, setName] = useState("");
    const [members, setMembers] = useState("");
    const [budget, setBudget] = useState("group.budget");

    const handleCoolSubmit = (e) => {
        debugger
        e.preventDefault();

        const newGroup = {
            ...group,
            name,
            members,
            budget,
            owner: userId
        }

        debugger
        if (newGroup !== undefined && formType === 'Create Group') {
            dispatch(createGroup(newGroup))
            dispatch(fetchGroups(userId))
        } else {
            dispatch(updateGroup(newGroup))
        }
    }

    return (
        <>
        <form className='group-form' >
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
            
        </form>
         <button className='submit-group' onClick={(e) => console.log(e)}>{formType}</button>
        </>
    )
}