import { DeleteForeverSharp, DrawSharp } from "@mui/icons-material";
import React from "react";
function Note({ id, text, date, deleteNote, editNote}) {
  return (
    <li className="note">
      
      <div class="note__image"/>
      <div class="note__body">Erm... What the sigma??? <i>Sigma sigma on the wall...</i> who is the <b>skibidiest</b> of them all?</div>
      <div class="note__footer">
      <div class="note__footer_left">
        <DeleteForeverSharp className="note__delete" style={{ fontSize: 40 }} onClick={() => deleteNote(id)} ariaHidden="true"/>
        <DrawSharp className="note__edit" style={{ fontSize: 40 }} onClick={() => editNote(id)} ariaHidden="true"/>
      </div>
      <div class="note__footer_right">
        <div class="note__date">31/12/99</div>
      </div>
      </div>
    </li>
  );
}
export default Note;

//<div class="note__title">Title</div>
//<div class="note__footer"></div>