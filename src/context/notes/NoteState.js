import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    const notesInitial = [];

    const [notes, setNotes] = useState(notesInitial);

    //get all notes
    const getAllNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
    }

    //add a note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json()
        console.log(json);

        // const note = {
        //     "_id": "65356c61ff81a278e6f89dc415",
        //     "user": "65341018c9125d2023a1ac76",
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "__v": 0
        // };
        setNotes(notes.concat(json));
    }

    //delete a note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenotes/:${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json;
        console.log(json);

        console.log("Delete the note with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id });
        setNotes(newNotes);
    }

    //edit a note
    const editNote = async (id, title, description, tag) => {
        console.log("note has been editing");

        const response = await fetch(`${host}/api/notes/updatenotes/:${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json()
        console.log(json);


        //logic to edit in client
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;