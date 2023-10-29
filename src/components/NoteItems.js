import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

export default function NoteItems(props) {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <>
      <div className='col-md-4 px-2 my-2 py-2'>
        <div className="card">
          <div className="card-body">
            <p className='col nameLimit'>Title:- {note.title}</p>
            <p className='col nameLimit'>Description:- {note.description}</p>
            <p className='col nameLimit'>Tag:- {note.tag}</p>
            <div className='border-bottom'></div>
            <i className="fa-solid fa-trash-can px-2 pt-3" onClick={() => { deleteNote(note._id) }}></i>
            <i className="fa-solid fa-pen-to-square px-2 pt-3" onClick={() => { updateNote(note) }}></i>
          </div>
        </div>
      </div>
    </>
  )
}
