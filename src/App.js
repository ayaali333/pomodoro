import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CountDown from "./Components/CountDown/CountDown";
import PopUpButton from "./Components/popUpButton/PopUpButton";
function App() {
  return (
    <div>
      <PopUpButton />
      <CountDown />
    </div>
  );
}

export default App;
