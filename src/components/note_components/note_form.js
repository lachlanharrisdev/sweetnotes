import React from "react";
import { AddCircle } from "@mui/icons-material";
function NoteForm({ textHandler, saveHandler, inputText }) {
  return (
    <li className="note">
      
      <div class="note__image"/>
      <form class="note__form">
        <textarea placeholder="Your thoughts..." required value={inputText} onChange={textHandler} rows={6} maxLength={100} wrap="hard" data-limit-rows="true" class="note__textarea"/>
        <button type="submit" class="note__button" onClick={saveHandler}>
          <AddCircle className="note__submit" aria-hidden="true"></AddCircle>
        </button>
      </form>
    </li>
  );
}
export default NoteForm;

//<div class="note__title">Title</div>
//<div class="note__footer"></div>