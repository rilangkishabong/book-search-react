import React from "react";
import "./style.css";

const Book = ({ title }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          className="card-img"
          src="https://source.unsplash.com/1600x1000/?book-cover"
          alt="food"
        />
        <div className="promotion">Promoted</div>
        <div className="discount">50% OFF up to 100</div>
        <div className="duration">38 min</div>
      </div>
      <h3>{title}</h3>
      <h5>North Indian, Chinese</h5>
      <hr />
      <div className="safety-measures">
        <h6>Follows all Max Safety measures to ensure your food is safe</h6>
      </div>
    </div>
  );
};

export default Book;
