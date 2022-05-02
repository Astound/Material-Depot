import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './Components/App.css';
import Navbar2 from "./Components/Navbar2";
import Navbarhead from "./Components/Navbarhead";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Sidebar from "./Components/Sidebar";
import Content1 from './Content1';
import Content2 from "./Content2";
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
