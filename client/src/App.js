import "./App.css";
import ButtonComponent from "./components/Button";

function App() {
  return (
    <div className="App">
      <ButtonComponent
        text={"Click me!"}
        type={"button"}
        variant={"outlined"}
        color={"secondary"}
      />
    </div>
  );
}

export default App;
