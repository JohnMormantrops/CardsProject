import "./styles.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Nav from "./navbar.js";
import Home from "./home.js";
import SelectCards from "./selectCards";
import ViewCards from "./viewCards";
import Account from "./account";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div>
          <Routes>
            <Route exact path="home" element={<Home />} />
            <Route exact path="selectCards" element={<SelectCards />} />
            <Route exact path="viewCards" element={<ViewCards />} />
            <Route exact path="account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
