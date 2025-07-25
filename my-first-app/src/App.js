import "./App.css";
import Bind from "./components/bind";
import Hi from "./components/class_comp";
import Conditional from "./components/conditional";
import Event from "./components/event";
import Eventc from "./components/event-class";
import { Hell } from "./components/function_cps";
import Inline from "./components/Inline";
import Welcome from "./components/jsx";
import Programming from "./components/list";
import Goodmorning from "./components/props";
import SecondComponent from "./components/second_component";
import Subscribe from "./components/states";
import Style from "./components/style";
import styles from "./stico.module.css";
import "./sti.css";
import Forma from "./components/form";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/About";
import Usestatecounter from "./hooks/Usestatecounter";
import Usestatecounter2 from "./hooks/Usestatecounter2";
import Usestateclass from "./hooks/Usestateclass"
import Useeffect from "./hooks/Useeffect"

function App() {
  return (
    <div className="App">
      <Usestatecounter />
      <Usestatecounter2 />
      <Router>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>
            Home
          </Link>
          <Link to="/Contact" style={{ marginRight: "10px" }}>
            Contact
          </Link>
          <Link to="/About">About Us</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/*"
            element={
              <h1>
                page does not found🙅🙅🙅🙅🙅🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♂️🙅‍♀️🙅‍♀️🙅‍♀️🙅‍♀️
              </h1>
            }
          />
        </Routes>
      </Router>

      <h1 className="sti">regular style</h1>
      <h1 className={styles.stico}>component style</h1>
      <Hell />
      <Hi />
      <Welcome />
      <Goodmorning Name="tolesa" Age="22" />
      <button>elder</button>
      <Goodmorning Name="wabii" Age="20" />
      <button>second</button>
      <Goodmorning Name="Guromsaa" Age="18" />
      <button>third</button>
      <Goodmorning Name="tolachitu" Age="16" />
      <button>latest</button>
      <h2>---------------------------------------------------</h2>
      <SecondComponent Maqa="baaroo" Umuri="12" />
      <button>elder</button>
      <SecondComponent Maqa="tumsa" Umuri="10" />
      <button>second</button>
      <SecondComponent Maqa="guddina" Umuri="8" />
      <button>latest</button>
      <Subscribe />
      <Event />
      <Eventc />
      <Bind />
      <Conditional />
      <Programming />
      <Style make={true} />
      <Inline />
      <Forma />
      <Usestateclass></Usestateclass>
      <Useeffect></Useeffect>
    </div>
  );
}

export default App;
