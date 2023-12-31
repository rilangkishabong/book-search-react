import React from "react";
import "./style.css";

const Book = ({ title, author, country, language, link, pages, year }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img
          className="card-img"
          src={process.env.PUBLIC_URL + "book-image.png"}
          alt="food"
        />
        <div className="promotion">Promoted</div>
        <div className="discount">By {author}</div>
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
