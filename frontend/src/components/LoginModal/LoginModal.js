import { useState } from "react";
import {Modal} from "../context/Modal";
import { SignInPage } from "../NavBar/UserAuthPages/SignInPage/SignInPage";

export default function LoginFormModal () {

    const[showModal, setShowModal] = useState(false);

    return (
        <>
            <a onClick={()=>setShowModal(true)}> Sign in </a>
            
            {showModal && (
            <Modal onClose={()=> setShowModal(false)}>
                <SignInPage/>
            </Modal>
            )}
     </>
    )
}