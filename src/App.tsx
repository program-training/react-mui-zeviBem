import "./App.css";
import  MuiComponents  from "./components/page1/page1";
import CheckBox from "./components/chose/chose";
import BasicSelect from './components/selectChose/selectChose'
import RadioChose from "./components/radioChose/radioChose";
function App() {
  return (
    <>
      <MuiComponents />
      < CheckBox />
      < BasicSelect />
      < RadioChose />

    </>
  );
}

export default App;
