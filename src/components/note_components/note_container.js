import { React, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "../css/note.css";
//import "../css/note_alternative.css";
import Note from "./note"
import HiddenNote from "./hidden_note";
import NoteForm from "./note_form";


function NoteContainer() {

const [notes, setNotes] = useState([]);
const [inputText, setInputText] = useState("");
const [date, setNoteDate] = useState("");

const textHandler = (e) => {
  setInputText(e.target.value);
};

const saveHandler = () => {
  setNotes((prevState) => [
    ...prevState,
    {
      id: uuid(),
      text: inputText,
      date: date,
    },
  ]);
  //clear the textarea
  setInputText("");

  //get current date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = dd + '-' + mm + '-' + yyyy;
  setNoteDate(today)
};

const deleteNote = (id) => {
  const filteredNotes = notes.filter((note) => note.id !== id);
  setNotes(filteredNotes);
};

useEffect(() => {
  const data = JSON.parse(localStorage.getItem("Notes"));
  if (data && data.length > 0) {
    setNotes(data);
  }
}, []);

//saving data to local storage
useEffect(() => {
  localStorage.setItem("Notes", JSON.stringify(notes));
}, [notes]);



  return (
    <ul className="note_container">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
        />
      ))}
      <NoteForm
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
      <HiddenNote/><HiddenNote/>
    </ul>
  );
}
export default NoteContainer;