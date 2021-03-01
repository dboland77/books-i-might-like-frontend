import React, { Fragment } from "react";
import "../styles/Gallery.css";

function Book(props) {
  return (
    <Fragment>
      <li className="cards_item">
        <div className="card">
          <div className="card_image">
            <img src={props.image} alt={`${props.name} logo`} />
          </div>
          <div className="card_content">
            {/* <h2 className="card_title"></h2> */}
            <p className="card_name">{props.name}</p>
            <p className="card_author">{props.author}</p>
            {/* <button className="btn card_btn">Read More</button> */}
          </div>
        </div>
      </li>
    </Fragment>
  );
}

export default Book;
