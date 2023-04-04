import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81QuI55xcdL._AC_UL400_.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    id: 2,
  },
];

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

const Book = (props) => {
  // console.log(props);
  const { img, title, author, children, getBook, id, index } = props;
  return (
    <article className="book">
      <h1>{index + 1}</h1>
      <img src={img} alt={title} />
      <button onClick={() => getBook(id)}>click me</button>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
