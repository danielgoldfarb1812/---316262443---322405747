import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthorizationContext from "../Authorization/AuthorizationContext";
export default function Notes(){
    const {notes, setNotes} = useContext(AuthorizationContext);
    const navigate = useNavigate();

    const onNoteDeletion = (noteIndex) => {
        const newNotes = [...notes];
        newNotes.splice(noteIndex, 1);
        setNotes(newNotes);
    };

    return(
        <div className="notes-container">
            <h1>Notes list:</h1>
            <ul>
                {notes.length > 0 ? (
                    notes.map((note, noteIndex) => (
                        <li key={noteIndex}>
                            {note.title} - 
                            <div>{note.description}</div>
                            <button onClick={() => onNoteDeletion(noteIndex)}>X</button>
                        </li>
                    ))
                ) : (
                    <li>No notes on this list</li>
                )}
            </ul>
            <button onClick={() => navigate('/AddNote')}>Add a note here</button>
        </div>
    )
}