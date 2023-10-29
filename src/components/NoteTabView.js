import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

export default function NoteTabView(props) {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <>
            <div className='col-12'>
                <div className='card list-group-item'>
                    <div className='card-body shadow-bottom'>
                        <div className='d-flex justify-content-between'>
                            <div className='col-10'>
                                <p className='col nameLimit'>Title:- {note.title}</p>
                                <p className='col nameLimit'>Description:- {note.description}</p>
                                <p className='col nameLimit'>Tag:- {note.tag}</p>
                            </div>
                            <div className=''>
                                <i className="fa-solid fa-trash-can px-2" onClick={() => { deleteNote(note._id) }}></i>
                                <i className="fa-solid fa-pen-to-square px-2" onClick={() => { updateNote(note) }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
