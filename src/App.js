import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './Components/App.css';
import Navbarhead from "./Components/Navbarhead";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Sidebar from "./Components/Sidebar";

import Nabar from './Nabar';

function App() {
  return (
    <div>
      <Navbarhead/>
      <Sidebar/>
      <Nabar/>
      <Router>
        <Routes>
        <Route path="/" element={<Page1/>}/>
        <Route path="/page2" element={<Page2/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
