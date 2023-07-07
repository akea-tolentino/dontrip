import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session'
import './NavBar.css';
import { FaRegUser } from "react-icons/fa";


export default function ProfileButton({user}) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    }

    useEffect(()=> {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        }

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);

    },[showMenu])

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
        <FaRegUser id="user-profile" onClick={openMenu}/>

        {showMenu && (
            <ul className="profile-dropdown">

                <li>
                    {user.email}
                </li>

                <li>
                    <NavLink className="trips-link" to={`/users/${user._id}/trips`}>My Trips</NavLink> {/* need to add link for my trips */}
                </li>

                <li className="logout-button">
                    <button onClick={logout}>Log Out</button>
                </li>

            </ul>
        )}
        </>
    );
}
