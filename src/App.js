import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "hejsan state!", day: "idag", reminder: true },
  ]);
  return (
    <div className="header-wrapper">
      <Header text="Kattes Pensionat" />
      <Header text="Bingo" />
      <Header text="Funny wiki" />
      <Header text="Mina spel" />
      <Header text="Dailies" />
      <Header text="Profil" />
    </div>
  );
}

export default App;
