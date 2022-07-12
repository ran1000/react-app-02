import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './App.css';

const experienceA = {
  image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
  rating: 4,
  title: "Life lessons with John Doe",
  price: 135,
}

const experienceB = {
  image: "https://images.unsplash.com/photo-1631125915902-d8abe9225ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2VyYW1pY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  rating: 5,
  title: "Ceramic with Lisa Anderson",
  price: 50,
}

const experiences = [];
experiences.push(experienceA);
experiences.push(experienceB);

function App() {
  const cards = experiences.map(item => {
    return (
      <Card
        title={item.title}
        image={item.image}
        rating={item.rating}
        price={item.price}
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
