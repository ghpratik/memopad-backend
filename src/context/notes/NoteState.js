import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "640c662f4a7cca612a0ab713",
            "user": "640c548a276d5346f151e442",
            "title": "My note Updated",
            "description": "Please wake up early at 12pm",
            "tag": "personality",
            "date": "1678534191077",
            "__v": 0
        },
        {
            "_id": "640d7db2632f79467a438ec2",
            "user": "640c548a276d5346f151e442",
            "title": "My Note 2",
            "description": "Please wake up early to study physics",
            "tag": "study",
            "date": "1678605746502",
            "__v": 0
        },
        {
            "_id": "640d7df2632f79467a438ec4",
            "user": "640c548a276d5346f151e442",
            "title": "My Note 3",
            "description": "Buy grocery from below list",
            "tag": "task to do",
            "date": "1678605810767",
            "__v": 0
        },
        {
            "_id": "640d7df2632f79467a438ec5",
            "user": "640c548a276d5346f151e442",
            "title": "My Note 3",
            "description": "Buy grocery from below list",
            "tag": "task to do",
            "date": "1678605810767",
            "__v": 0
        },
        {
            "_id": "640d7df2632f79467a438ec6",
            "user": "640c548a276d5346f151e442",
            "title": "My Note 3",
            "description": "Buy grocery from below list",
            "tag": "task to do",
            "date": "1678605810767",
            "__v": 0
        },
        {
            "_id": "640d7df2632f79467a438ec7",
            "user": "640c548a276d5346f151e442",
            "title": "My Note 3",
            "description": "Buy grocery from below list",
            "tag": "task to do",
            "date": "1678605810767",
            "__v": 0
        },
        {
            "_id": "640d7df2632f79467a438ec8",
            "user": "640c548a276d5346f151e442",
            "title": "My Note 3",
            "description": "Buy grocery from below list",
            "tag": "task to do",
            "date": "1678605810767",
            "__v": 0
        },
        {
            "_id": "640d7df2632f794679438ec4",
            "user": "640c548a276d5346f151e442",
            "title": "My Note 3",
            "description": "Buy grocery from below list",
            "tag": "task to do",
            "date": "1678605810767",
            "__v": 0
        },
        {
            "_id": "640d7df2632f29467a438ec4",
            "user": "640c548a276d5346f151e442",
            "title": "My Note 3",
            "description": "Buy grocery from below list",
            "tag": "task to do",
            "date": "1678605810767",
            "__v": 0
        },
        {
            "_id": "640d7df2632f79467a538ec4",
            "user": "640c548a276d5346f151e442",
            "title": "My Note 3",
            "description": "Buy grocery from below list",
            "tag": "task to do",
            "date": "1678605810767",
            "__v": 0
        }
    ];
    const [notes, setNotes] = useState(notesInitial);

    //Add a Note
    const addNote = (title, description, tag)=>{
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
    const deleteNote = (id)=>{
        console.log("deleting note with id "+ id)
        const newNote = notes.filter((note)=> {return note._id !== id})
        setNotes(newNote);
    }

    //Edit a note
    const editNote = (id, title, description, tag)=>{
        
    }


    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )

}
export default NoteState;