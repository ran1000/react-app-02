import React from "react";

export default function Card() {
  return (
    <div className="card">
      <div className="soldout-label">
        <h5>SOLD OUT</h5>
      </div>
      <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3dpbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
      <div className="card-info">
        <p>
          <i className="fa-solid fa-star"></i>
          5.0(6) - USA</p>
        <p>
          Life lessons with Katie Zaferes
        </p>
        <p>
          <strong>
            From $135
          </strong>
          / person
        </p>
      </div>
    </div>
  )
}
