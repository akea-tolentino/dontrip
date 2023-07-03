import { useState } from "react";
import { useDispatch } from "react-redux";

export const SignInPage = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    
    const [password, setPassword] = useState("")


    return (
        <>
            <div>
                <form>
                    <label>
                        <input
                            type="text"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <input
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}