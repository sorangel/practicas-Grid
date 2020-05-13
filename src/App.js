import React from "react";
import Content from "./Content";
import Header from "./Header";
import Aside from "./Aside";
import Section from "./Section";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="title">
        <h1>CSS GRID</h1>
      </header>

      <div className="container">
        <Header />
        <Content />
        <Aside />
        <Section />
        <Footer />
      </div>
    </div>
  );
}

export default App;
