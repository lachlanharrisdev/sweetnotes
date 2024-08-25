import { React, useState, useEffect } from "react";
import "../css/note.css";
import Note from "./note"
import HiddenNote from "./hidden_note";
import NoteForm from "./note_form";
function NoteContainer() {
  return (
    <ul className="note_container">
      <NoteForm />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </ul>
  );
}
export default NoteContainer;