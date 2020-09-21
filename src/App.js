import React from 'react';
import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import './App.css';
import "./Content.css";

function App() {
  return (
    <div className="App">
        <Header />
        <Content />
        <Footer />
    </div>
  );
}

export default App;
