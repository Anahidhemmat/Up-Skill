import "./App.css";
import ButtonComponent from "./components/Button";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
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
