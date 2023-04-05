import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

import { books } from "./books";
import Book from "./Book";

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} getBook={getBook} key={book.id} index={index} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
