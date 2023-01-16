import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ImgFlip from "./components/ImgFlip";
import SignUpForm from "./components/SignUpForm";
import StarWars from "./components/StarWars";
import WindowWidth from "./components/WindowWidth";

function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div className="App">
      <main className="main__container">
        <p>Controlled Components</p>
        {/* <Form /> */}
        {/* <SignUpForm /> */}
        {/* <StarWars /> */}
        {/* <ImgFlip /> */}

        {showComponent && <WindowWidth />}
        <button
          onClick={() => setShowComponent(!showComponent)}
          style={{ margin: "2rem" }}
        >
          Toggle Components
        </button>
      </main>
    </div>
  );
}

export default App;
