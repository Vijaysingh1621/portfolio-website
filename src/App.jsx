// App.js
import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/about";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
