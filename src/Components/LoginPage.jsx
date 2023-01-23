import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthorizationContext from "../Authorization/AuthorizationContext";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const navigate = useNavigate();

    const {emailPassword} = useContext(AuthorizationContext);

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }


    const onSubmission = (event) => {
        event.preventDefault();

        if (emailPassword.email == email && emailPassword.password == password){
            setIsRegistered(true);
            alert(`Logged in as ${email}`)
            navigate('/AddNote')
        }
        else{
            alert(`Password is incorrect or email does not exist!`)
        }
    };

    return(
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={onSubmission}>
                <label>
                    <h2>Email</h2>
                    <input type="email" value={email}
                    onChange={onEmailChange}
                    required />
                </label>
                <br />
                <label>
                    <h2>Password</h2>
                    <input type="password" value={password}
                    onChange={onPasswordChange}
                    required />
                </label>
                <br />
                <button type="submit">Login</button>
                <p>Not registered?</p>
                <button onClick={() => navigate("/")}>Register now!</button>
            </form>
        </div>
    )
}