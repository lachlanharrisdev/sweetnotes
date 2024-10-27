import { React } from "react";
import "./components/css/App.css";
import Header from "./components/note_components/header";
import NoteContainer from "./components/note_components/note_container";
import SideBar from "./components/misc_components/sidebar.js";
import Background from "./components/note_components/background";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

function App() {
  const icons = [
    { icon: <FaHome />, action: () => alert("Home clicked"), title: "Home" },
    { icon: <FaUser />, action: () => alert("Profile clicked"), title: "Profile" },
    { icon: <FaCog />, action: () => alert("Settings clicked"), title: "Settings" },
  ];

  return (
    <div className="main">
      <Background />
      <SideBar icons={icons}/>
      <NoteContainer />
    </div>
  );
}
export default App;