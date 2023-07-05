import './Splash.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { Modal } from "../../context/Modal"
import { SignInPage } from "../../NavBar/UserAuthPages/SignInPage/SignInPage"
import { SignUpPage } from "../../NavBar/UserAuthPages/SignUpPage/SignUpPage"

export default function Splash () {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showSplashInfo, setShowSplashInfo] = useState(true)

    
    const handleModalClose = (e) => {
        setShowLoginModal(false);
        setShowSignUpModal(false);
        setShowSplashInfo(true);
    }

    const handleSignUpModalOpen = (e) => {
        setShowSignUpModal(true);
        setShowSplashInfo(false);
    }

    const handleSignInModalOpen = (e) => {
        setShowLoginModal(true);
        setShowSplashInfo(false);
    }

    return (
        <div>
            {showSplashInfo && <div className='splash-background'>
                <article className='splash'>
                    <p className='splash-message'>
                        Welcome to don'trip, an AI assisted web application <br/>
                        designed to help you plan your next vacation. <br/>
                        Sign in or sign up to get started! <br/>
                        Alternatively, take a look at how it works with our demo.
                        {/* <br/> Don't trip, we've got you covered. */}
                    </p>
                    <ul className='splash-buttons'>
                        <button onClick={handleSignUpModalOpen}>Sign Up</button>
                        <button onClick={handleSignInModalOpen}>Login</button>

                        <button onClick={ ()=> {setShowSplashInfo(false)}}>Demo</button>
                    </ul>
                  
                </article>

            </div>}
            {showSignUpModal && (<Modal onClose={handleModalClose} >
                <SignUpPage/>
            </Modal>)}
            {showLoginModal && (<Modal onClose={handleModalClose} >
                <SignInPage/>
            </Modal>)}  
        </div>
    )
}