// App.js
import React from "react";
import Header from "./Components/Header";
import About from "./Components/about";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
