import React from "react";

export default function Card(props) {
  // Card Logic
  return (
    // Card Displayed Information
    <div className="card">
      <div className="soldout-label">
        <h5>SOLD OUT</h5>
      </div>
      <img src={props.image} alt="Experience." />
      <div className="card-info">
        <p>
          <i className="fa-solid fa-star"></i>
          {props.rating}.0(6) - USA</p>
        <p>
          {props.title}
        </p>
        <p>
          <strong>
            From ${props.price}
          </strong>
          / person
        </p>
      </div>
    </div>
  )
}
