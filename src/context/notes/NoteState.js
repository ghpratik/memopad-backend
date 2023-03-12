import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    
    //GET ALL NOTES

    const getNotes = async() => {
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwYzU0OGEyNzZkNTM0NmYxNTFlNDQyIn0sImlhdCI6MTY3ODUzMDIyN30.KNG_9USbMU5UvwyKVEDj-VunPiFcGy5sLf5vvn69WqY"
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    //Add a Note

    const addNote = async(title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwYzU0OGEyNzZkNTM0NmYxNTFlNDQyIn0sImlhdCI6MTY3ODUzMDIyN30.KNG_9USbMU5UvwyKVEDj-VunPiFcGy5sLf5vvn69WqY"
            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });

        // client side add note
        const note = {
            "_id": "640d7df2632f7957a538ec4",
            "user": "640c548a276d5346f151e442",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "1678605810767",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    //Delete a note

    const deleteNote = async(id) => {
        console.log("deleting note with id " + id)
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote);
        //API call

        // client side delete
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwYzU0OGEyNzZkNTM0NmYxNTFlNDQyIn0sImlhdCI6MTY3ODUzMDIyN30.KNG_9USbMU5UvwyKVEDj-VunPiFcGy5sLf5vvn69WqY"
            },
        });
        const json = await response.json();
        console.log(json);
        json = response.json(); // parses JSON response into native JavaScript objects
    }

    //Edit a note
    const editNote = async (id, title, description, tag) => {
        //API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwYzU0OGEyNzZkNTM0NmYxNTFlNDQyIn0sImlhdCI6MTY3ODUzMDIyN30.KNG_9USbMU5UvwyKVEDj-VunPiFcGy5sLf5vvn69WqY"
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
        });


        // edit in client side
        for (let i = 0; i < notes.length; i++) {
            const element = notes[i];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }


    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </noteContext.Provider>
    )

}
export default NoteState;