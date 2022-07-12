import React from "react";

export default function Card(props) {
  // Card Logic
  return (
    // Card Displayed Information
    <div className="card">
      {props.openSpots === 0 && <div className="soldout-label">
        <h5>SOLD OUT</h5>
      </div>}
      <img src={props.image} alt="Experience." />
      <div className="card-info">
        <p>
          <i className="fa-solid fa-star"></i>
          {props.rating}.0(6) - USA</p>
        <p>
          {props.title}
        </p>
        {props.price ? <p>
          <strong>
            From ${props.price}
          </strong>
          / person
        </p> : <p>n.d.</p>}
      </div>
    </div>
  )
}
