import React, { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("about");

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => setCurrentPage("about")}>About Us</li>
          <li onClick={() => setCurrentPage("projects")}>Career</li>
          <li onClick={() => setCurrentPage("contact")}>Contact</li>
        </ul>
      </nav>
      <main>
        {currentPage === "about" && <About />}
        {currentPage === "projects" && <Projects />}
        {currentPage === "contact" && <Contact />}
      </main>
    </div>
  );
};

export default App;
