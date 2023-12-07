import React, { useState } from "react";
import { useFetchDataContext } from "./FetchData";
import BookComponent from "./Book";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 8;

const BookList: React.FC = () => {
  const { searchResults } = useFetchDataContext();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, searchResults.length);
  const booksToShow = searchResults.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  if (booksToShow.length > 0) {
    return (
      <div className="booklist py-3">
        <h2 className="text-center m-5">Our Book Store</h2>
        <div className="container">
          <div className="row ">
            {booksToShow.map((book) =>
              book.cover_i ? (
                <Link
                  to={`/books/${book.id}`}
                  className="book p-3 col-6 col-lg-4"
                  key={book.cover_i}
                >
                  <BookComponent book={book} />
                </Link>
              ) : null
            )}
          </div>
          <div className="pagination d-flex justify-content-center align-items-center">
            <button
              disabled={currentPage === 1}
              onClick={goToPreviousPage}
              className="page-button"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => goToPage(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={goToNextPage}
              className="page-button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default BookList;
