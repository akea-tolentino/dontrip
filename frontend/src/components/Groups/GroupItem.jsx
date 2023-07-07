import GroupForm from "./GroupForm";

export default function GroupItem ( { group } ) {

    return (
        <ul className="group-item-wrapper">
            <li>{group.name}</li>
            <li>{group.members}</li>
            <li>{group.budget}</li>
            <GroupForm groupId={group._id}/>
        </ul>
    )
}