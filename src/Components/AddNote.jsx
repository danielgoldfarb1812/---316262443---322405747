import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthorizationContext from "../Authorization/AuthorizationContext";

export default function AddNote(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {notes} = useContext(AuthorizationContext);
    const {emailPassword, setNotes} = useContext(AuthorizationContext);

    const navigate = useNavigate();

    const onTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const onDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const onNoteAddition = (event) => {
        event.preventDefault();
        setNotes([...notes, {email: emailPassword.email, title, description}]);
        alert('Note added successfully!');
        setTitle("");
        setDescription("");
    };

    const onNotesNavigation = () => {
        navigate("/Notes")
    }

    return(
        <div className="form-container">
            <h1>Add a note</h1>
            <form onSubmit={onNoteAddition}>
                <label>
                    <h2>Title</h2>
                    <input type="text" value={title}
                    onChange={onTitleChange}
                    required />
                </label>
                <br />
                <label>
                    <h2>Description</h2>
                    <input type="text" value={description}
                    onChange={onDescriptionChange}
                    required />
                </label>
                <br />
                <button type="submit">Add this note</button>
            </form>
            <button onClick={onNotesNavigation}>See notes list</button>
        </div>
    )
}