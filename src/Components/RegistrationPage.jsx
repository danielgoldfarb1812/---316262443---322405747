import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthorizationContext from "../Authorization/AuthorizationContext";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const {setEmailPassword} = useContext(AuthorizationContext)

    const navigate = useNavigate();

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const onPasswordConfirmChange = (event) => {
        setPasswordConfirm(event.target.value);
    }

    const onSubmission = (event) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
            alert('Passwords do not match!');
            return;
        }
        setEmailPassword({email: email.toLowerCase(), password: password});
        alert('Registration successful!');
        navigate('/login');
    };

    return(
        <div className="form-container">
            <h1>Registration</h1>
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
                    <input type="password"
                    value={password}
                    onChange={onPasswordChange}
                    required />
                </label>
                <br />
                <label>
                    <h2>Confirm Password</h2>
                    <input type="password"
                    value={passwordConfirm}
                    onChange={onPasswordConfirmChange}
                    required />
                </label>
                <br />
                <button type="submit">Register now!</button>
            </form>
        </div>
    )
}

export default Register;