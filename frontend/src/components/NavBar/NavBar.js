import { NavLink } from "react-router-dom"
import ProfileButton from "./ProfileButton";
import './NavBar.css'
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginModal/LoginModal";

export default function NavBar () {
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;

    if (sessionUser) {
      sessionLinks = (
        <>
          <ProfileButton user={sessionUser} />
        </>
      );
    } else {
      sessionLinks = (
        <>

          <LoginFormModal/>
        </>
      );
    }

    return (
        <>
        <header className="header">
                        <NavLink exact to="/" className="logo">don'trip</NavLink>
                <ul className="header-list">
                    <li className="signin">
                        {sessionLinks}
                    </li>
                </ul>
        </header>
        </>
    );
}