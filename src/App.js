import React, { useState } from "react";
import "./App.css";
import Header from "./sections/header/Header";
import Hero from "./sections/hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Skills from "./sections/skills/Skills";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Hero />
      <Skills/>
    </div>
  );
}

export default App;
