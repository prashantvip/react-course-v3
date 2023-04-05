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

export default Book;
