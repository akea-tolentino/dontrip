import GroupForm from "./GroupForm";
import { useState } from 'react'

export default function GroupItem ( { group } ) {

    const [showForm, setShowForm] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        (showForm === false ? setShowForm(true) : setShowForm(false))
    }

    return (
        <article>
            <ul className="group-item-wrapper">
                <li>{group.name}</li>
                <li>members: {group.members}</li>
                <li>budget: ${group.budget}</li>
            </ul>
            {/* <button onClick={handleClick}>edit</button>
            {showForm && (
                <GroupForm groupId={group._id} />
                )} */}
        </article>
    )
}