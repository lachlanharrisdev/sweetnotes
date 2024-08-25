import React from "react";
import { AddCircle } from "@mui/icons-material";
function NoteForm() {
  return (
    <li className="note">
      
      <div class="note__image"/>
      <form class="note__form">
        <textarea placeholder="Your thoughts..." required rows={7}/>
        <button type="submit">
          <AddCircle className="note__submit" aria-hidden="true"></AddCircle>
        </button>
      </form>
    </li>
  );
}
export default NoteForm;

//<div class="note__title">Title</div>
//<div class="note__footer"></div>