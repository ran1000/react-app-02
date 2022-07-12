import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './App.css';

const experienceA = {
  key: 1,
  image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  rating: 4,
  title: "Life lessons with John Doe",
  price: 135,
  openSpots: 2
}

const experienceB = {
  key: 2,
  image: "https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2VyYW1pY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  rating: 5,
  title: "Ceramic with Lisa Anderson",
  price: 50,
  openSpots: 0
}

const experienceC = {
  key: 3,
  image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  rating: 3,
  title: "Walking Tour",
  openSpots: 2
}

const experiences = [];
experiences.push(experienceA);
experiences.push(experienceB);
experiences.push(experienceC);

function App() {
  const cards = experiences.map(item => {
    return (
      <Card
        key={item.key}
        // Alternative to item={item}
        {...item}
      />
    )
  })
  return (
    < div >
      <Navbar />
      <Hero />
      <div className="card-grid">
        {cards}
      </div>
    </div>
  );
}

export default App;
