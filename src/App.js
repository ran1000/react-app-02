import React from "react"
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './App.css';

const experiences = [
  {
    image: "strnig",
    rating: 2,
    title: "dss",
    price: 3
  }
]

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Navbar />
      <Hero />
      <div className="card-grid">
        <Card />
      </div>
    </div>
  );
}

export default App;
