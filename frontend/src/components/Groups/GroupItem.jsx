import GroupForm from "./GroupForm";
import { useState } from 'react'
import { deleteGroup, fetchGroups } from '../../store/groups'
import { useDispatch } from "react-redux";

export default function GroupItem ( { group, userId} ) {
    // let groupId = group._id;
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        (showForm === false ? setShowForm(true) : setShowForm(false));
    }

    const handleDelete = (e) => {
        e.preventDefault();
        // debugger
        dispatch(deleteGroup(group._id));
        dispatch(fetchGroups(userId));
    }

    return (
        <article>
            <ul className="group-item-wrapper">
                <li>{group.name}</li>
                <li>members: {group.members}</li>
                <li>budget: ${group.budget}</li>
            </ul>
            <button onClick={handleClick}>Edit Group</button>
            {showForm && (
                <GroupForm userId={userId} groupId={group._id} />
                )}
            <button onClick={handleDelete}>Delete Group</button>
            {showForm && (
                <GroupForm userId={userId} groupId={group._id} />
                )}

        </article>
    )
}
