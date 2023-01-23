import React from 'react';
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    const onHomeNavigation = () => {
        navigate('/')
    }
    const onNotesNavigation = () => {
        navigate('/Notes')
    }
    const onAddNoteNavigation = () => {
        navigate('/AddNote')
    }
    const onLoginNavigation = () => {
        navigate('/login')
    }
    return (
        <header className='header-comp'>
            <h1>Note box</h1>
            <button onClick={onHomeNavigation}>Registration page</button>
            <button onClick={onLoginNavigation}>Login</button>
            <button onClick={onNotesNavigation}>Notes list</button>
            <button onClick={onAddNoteNavigation}>Add note</button>
        </header>
    );
}

export default Header;