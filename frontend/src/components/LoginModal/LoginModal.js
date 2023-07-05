import { useState } from "react";
import { Modal } from "../context/Modal";
import { SignInPage } from "../NavBar/UserAuthPages/SignInPage/SignInPage";
import { SignUpPage } from "../NavBar/UserAuthPages/SignUpPage/SignUpPage";

export default function LoginFormModal () {

    const [showModal, setShowModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);


    return (
        <>
            <a onClick={()=>{setShowSignUpModal(true);}}> Sign up </a>

            <a id="signin" onClick={()=>setShowModal(true)}> Sign in </a>

            {showSignUpModal && (
                <Modal onClose={()=> setShowSignUpModal(false)} >
                    <SignUpPage/>
                </Modal>)}
            {showModal && (
                <Modal onClose={()=> setShowModal(false)} >
                    <SignInPage/>
                </Modal>
            )}
     </>
    )
}