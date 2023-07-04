import './Splash.css';
import { useState } from 'react';
import { Modal } from "../../context/Modal"
import { SignInPage } from "../../NavBar/UserAuthPages/SignInPage/SignInPage"
import { SignUpPage } from "../../NavBar/UserAuthPages/SignUpPage/SignUpPage"

export default function Splash () {
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
        <div className='splash-background'>
            <article className='splash'>
                <p className='splash-message'>
                    Welcome to don'trip, an AI assisted web application <br/>
                    designed to help you plan your next vacation. <br/>
                    Sign in or sign up to get started! <br/>
                    Alternatively, take a look at how it works with our demo.
                    {/* <br/> Don't trip, we've got you covered. */}
                </p>
                <ul className='splash-buttons'>
                    <button onClick={() => {setShowSignUpModal(true);}}>Sign Up</button>
                    <button onClick={() => { setShowLoginModal(true)}}>Login</button>
                    {showSignUpModal && (<Modal onClose={handleModalClose} >
                            <SignUpPage/>
                        </Modal>)}
                    {showLoginModal && (<Modal onClose={handleModalClose} >
                            <SignInPage/>
                        </Modal>)}
                    <button>Demo</button>
                </ul>
            </article>
        </div>
    )
}