import { NavLink } from "react-router-dom"
import ProfileButton from "./ProfileButton";
import './NavBar.css'
import { useSelector } from "react-redux";

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
          {/* <LoginFormModal/> */}
        </>
      );
    }

    return (
        <>
        <header className="header">
            <nav className="header-nav">
                <ul className="header-list">
                    <li className="logo"> 
                        <NavLink exact to="/">don'trip</NavLink>
                    </li>

                    <li className="signin">
                        {sessionLinks}
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}