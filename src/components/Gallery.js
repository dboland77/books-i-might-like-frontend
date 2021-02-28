import React, { useState, useEffect, Fragment } from "react";
import Book from "./Book";
import { getBooks } from "../services/user.service";
import "../Gallery.css";

function Gallery() {
  const [books, setBooks] = useState("");

  useEffect(() => {
    getBooks().then(
      (response) => {
        setBooks(response.data);
      },
      (error) => {
        const _books =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setBooks(_books);
      }
    );
  }, []);

  console.log(books);

  return (
    <Fragment>
      {books && (
        <div className="main">
          <ul className="cards">
            {books.map((gallery) => (
              <Book
                key={gallery.id}
                id={gallery.id}
                name={gallery.Title_DistinctivetitlebookCovertitle_TitleText}
                image={`${process.env.REACT_APP_PREFIX}${gallery.Location}${gallery.Cover_File}`}
                author={gallery.Contributor1_PersonName}
              ></Book>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
}

export default Gallery;
