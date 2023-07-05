import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../../../store/session";


export const SignUpPage = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    
    const [password, setPassword] = useState("")

    
    const handleSignUp = async (e) => {
        e.preventDefault();

        const userInfo = {
            email: email,
            password: password
        }

        const res = await dispatch(signup(userInfo))
        debugger
    }



    return (
        <>
            <div className="user-auth-container">
                <form onSubmit={handleSignUp}>
                    <h2 className="user-auth-title">Sign Up</h2>
                    <div className="user-auth-input-container">
                        <label>
                            <input
                                type="text"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>                        
                    </div>
                    <div className="user-auth-input-container">
                        <label>
                            <input
                                type="password"
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>                        
                    </div>
                    <button className="user-auth-button" type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}