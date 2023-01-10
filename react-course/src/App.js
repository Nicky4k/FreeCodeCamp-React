import "./App.css";
import Form from "./components/Form";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="App">
      <main className="main__container">
        <p>Controlled Components</p>
        {/* <Form /> */}
        <SignUpForm />
      </main>
    </div>
  );
}

export default App;
