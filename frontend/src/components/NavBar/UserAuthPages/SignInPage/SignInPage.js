import { useState } from "react";
import { useDispatch } from "react-redux";
import "../UserAuth.css"

export const SignInPage = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    
    const [password, setPassword] = useState("")


    return (
        <>
            <div className="user-auth-container">
                <form>
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