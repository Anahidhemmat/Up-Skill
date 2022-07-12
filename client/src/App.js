import "./App.css";
import ButtonComponent from "./components/Button/Button";
import {
  ContainedError,
  ContainedPrimary,
} from "./components/Button/Button.stories";
import CardComponent from "./components/Card";
import TextFieldComponent from "./components/Input";
import ListComponent from "./components/List";
import ListItemComponent from "./components/ListItem";
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
      <ListComponent width="400px" bgcolor="#efefef">
        <ListItemComponent primary="List Item" secondary="secondary text" />
        <ListItemComponent primary="second Item" secondary="secondary text" />
      </ListComponent>
    </div>
  );
}

export default App;
