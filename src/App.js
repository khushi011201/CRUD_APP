import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Create from './components/Create';
import  Read from './components/Read'
import Update from './components/Update'
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <Router>
    <div>
    <Nav/>

      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
        <Route path="/about" element={<About />} />




      </Routes>
    </div>
  </Router>
  );
}

export default App;
