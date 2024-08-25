import { useState } from "react";
import Note from "./components/note_components/note";

const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      date: "6/9/24",
      content: "bla bla note1",
    },
    {
      id: 2,
      date: "69/42/2024",
      content: "bla bla note2",
    },
    {
      id: 3,
      date: "test note 3",
      content: "bla bla note3",
    },
    {
      id: 4,
      date: "test note 4 ",
      content: "bla bla note4",
    },
    {
      id: 5,
      date: "test note 5",
      content: "bla bla note5",
    },
    {
      id: 6,
      date: "test note 6",
      content: "bla bla note6",
    },
    ]);

