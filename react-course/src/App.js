import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ImgFlip from "./components/ImgFlip";
import MainPageToggleTheme from "./components/MainPageToggleTheme";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import StarWars from "./components/StarWars";
import WindowWidth from "./components/WindowWidth";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div className="App">
      <main className="main__container">
        <p>Controlled Components</p>
        <Form />
        <SignUpForm />
        <StarWars />
        <ImgFlip />

        {showComponent && <WindowWidth />}
        <button
          onClick={() => setShowComponent(!showComponent)}
          style={{ margin: "2.25rem" }}
        >
          Toggle Components
        </button>
        <NavBar props={{ darkMode, toggleDarkMode }} />
        <MainPageToggleTheme props={{ darkMode }} />
      </main>
    </div>
  );
}

export default App;
