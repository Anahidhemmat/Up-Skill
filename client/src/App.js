import "./App.css";
import ButtonComponent from "./components/Button";
import CardComponent from "./components/Card";
import TextFieldComponent from "./components/Input";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <div>
      <NavbarComponent />
      <TextFieldComponent label="name" variant="outlined" />
      {/* <TextFieldComponent label="name" variant="filled" />
      <TextFieldComponent label="name" variant="standard" /> */}
      <CardComponent
        title="React"
        cardBody="Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before."
        btn1="share"
        btn2="learn more"
        src="https://source.unsplash.com/random"
        alt="unsplash img"
      />
      <ButtonComponent
        text="Click me!"
        type="button"
        variant="outlined"
        color="secondary"
      />
    </div>
  );
}

export default App;
