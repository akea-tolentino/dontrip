import { useState } from "react";
import { useDispatch } from "react-redux";
import "../UserAuth.css"
import { login } from "../../../../store/session";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



export const SignInPage = () => {
    
    const history = useHistory();

    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    
    const [password, setPassword] = useState("")

    const handleSignIn = async (e) => {
        e.preventDefault();

        const userInfo = {
            email: email,
            password: password
        }

    
        const res = await dispatch(login(userInfo))
        return history.push(`/users/${res.currentUser._id}/trips`)

    }

    return (
        <>
            <div className="user-auth-container">
                    <form onSubmit={handleSignIn}>
                        <h2 className="user-auth-title">Sign In</h2>
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