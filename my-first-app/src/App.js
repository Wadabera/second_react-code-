import "./App.css";
import Hi from "./components/class_comp";
import { Hell } from "./components/function_cps";
import Welcome from "./components/jsx";
import Goodmorning from "./components/props";
import SecondComponent from "./components/second_component";
import Subscribe from "./components/states";
function App() {
  return <div className="App">
    <Hell></Hell>
    <Hi></Hi>
    <Welcome></Welcome>
    <Goodmorning Name="tolesa" Age="22"></Goodmorning>
    <button>elder</button>
    <Goodmorning Name="wabii"  Age="20"></Goodmorning>
    <button>second</button>
    <Goodmorning Name="Guromsaa"  Age="18"></Goodmorning>
    <button>third</button>
    <Goodmorning Name="tolachitu"  Age="16"></Goodmorning>
    <button>latest</button>
    <h2>---------------------------------------------------</h2>
    <SecondComponent Maqa="baaroo" Umuri="12"></SecondComponent>
    <button>elder</button>
    <SecondComponent Maqa="tumsa" Umuri="10"></SecondComponent>
    <button>second</button>
    <SecondComponent Maqa="guddina" Umuri="8"></SecondComponent>
    <button>latest</button>
    <Subscribe></Subscribe>
  </div>;
 }







export default App;
