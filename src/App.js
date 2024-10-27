import { React } from "react";
import "./components/css/App.css";
import Header from "./components/note_components/header";
import NoteContainer from "./components/note_components/note_container";
import SideBar from "./components/misc_components/sidebar.js";
import Background from "./components/note_components/background";
function App() {
  return (
    <div className="main">
      <Background />
      <SideBar />
      <NoteContainer />
    </div>
  );
}
export default App;