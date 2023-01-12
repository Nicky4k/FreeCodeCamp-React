import "./App.css";
import Form from "./components/Form";
import ImgFlip from "./components/ImgFlip";
import SignUpForm from "./components/SignUpForm";
import StarWars from "./components/StarWars";
import WindowWidth from "./components/WindowWidth";

function App() {
  return (
    <div className="App">
      <main className="main__container">
        <p>Controlled Components</p>
        {/* <Form /> */}
        {/* <SignUpForm /> */}
        {/* <StarWars /> */}
        {/* <ImgFlip /> */}
        <WindowWidth />
      </main>
    </div>
  );
}

export default App;
