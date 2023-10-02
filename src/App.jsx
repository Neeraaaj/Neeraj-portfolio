import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/skills" exact element={<Skills />} />
          <Route path="/projects" exact element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
