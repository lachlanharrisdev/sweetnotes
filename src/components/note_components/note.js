import { DeleteForever, Draw } from "@mui/icons-material";
import React from "react";
function Note({ id, text, date, deleteNote, editNote}) {
  return (
    <li className="note">
      <div class="note__wrap">
      
      <div class="note__image"/>
      <div class="note__body">{text}</div>
      <div class="note__footer">
      <div class="note__footer_left">
        <DeleteForever className="note__delete" style={{ fontSize: 40 }} onClick={() => deleteNote(id)} ariaHidden="true"/>
        <Draw className="note__edit" style={{ fontSize: 40 }} onClick={() => editNote(id)} ariaHidden="true"/>
      </div>
      <div class="note__footer_right">
        <div class="note__date">{date}</div>
      </div>
      </div>
      </div>
    </li>
  );
}
export default Note;

//<div class="note__title">Title</div>
//<div class="note__footer"></div>