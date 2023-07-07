import GroupForm from "./GroupForm";

export default function GroupItem ( { group } ) {

    return (
        <ul className="group-item-wrapper">
            <li>{group.name}</li>
            <li>members: {group.members}</li>
            <li>budget: ${group.budget}</li>
            <GroupForm groupId={group._id}/>
        </ul>
    )
}