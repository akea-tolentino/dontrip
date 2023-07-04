<<<<<<< HEAD
import { useState } from "react"
import { Modal } from "../context/Modal"
import { SignInPage } from "./UserAuthPages/SignInPage/SignInPage"
import { SignUpPage } from "./UserAuthPages/SignUpPage/SignUpPage"


//DELETE THIS LATER
export const NavBar = () => {

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);

    const handleModalClose = (e) => {
        setShowLoginModal(false);
        setShowSignUpModal(false);
    }

    
    const handleModalOpen = async (e) => {
        setShowLoginModal(true);
        setShowSignUpModal(true);
    }

    

    return (
        <>
            <button onClick={() => {setShowSignUpModal(true);}}>Sign Up</button>
            <button onClick={() => { setShowLoginModal(true)}}>Login</button>

            {showSignUpModal && (<Modal onClose={handleModalClose} >
                <SignUpPage/>
            </Modal>)}

            {showLoginModal && (<Modal onClose={handleModalClose} >
                <SignInPage/>
            </Modal>)}

        </>
    )
=======
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
>>>>>>> main
}