import GroupForm from "./GroupForm";
import { useEffect, useState } from 'react'
import { deleteGroup, fetchGroups } from '../../store/groups'
import { useDispatch } from "react-redux";

export default function GroupItem ( { group, userId} ) {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setShowForm(false);
        (!showForm) ? setShowForm(true) : setShowForm(false);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        const confirm = window.confirm(`Are you sure you want to delete ${group.name}?`)
        if (confirm) {
            dispatch(deleteGroup(group._id));
            dispatch(fetchGroups(userId));
        } 
    }

    return (
        <article>

            <ul className="group-item-wrapper">
                <li>{group.name}</li>
                <li>members: {group.members}</li>
                <li>budget: ${group.budget}</li>
            </ul>

            <button onClick={handleClick}>
                Edit Group
            </button>

            {showForm && (
                <div className="edit-form-dropdown">
                    <div className="edit-x" onClick={()=>setShowForm(false)}>X</div>
                    <GroupForm userId={userId} groupId={group._id}/>
                </div>
                )}

            <button onClick={handleDelete}>
                Delete Group
            </button>

        </article>
    )
}
