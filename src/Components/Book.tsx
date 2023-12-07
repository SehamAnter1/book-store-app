import React from "react";

interface Book {
  title: string;
  author_name: string[];
  cover_i: string;
}

interface BookProps {
  book: Book;
}

const BookComponent: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="text-center card p-3 " key={book.cover_i}>
      <img
        src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt="Book Cover"
      />
      <h2>{book.title}</h2>
    </div>
  );
};

export default BookComponent;
