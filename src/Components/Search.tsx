import React, { useState,useEffect } from "react";
import { useFetchDataContext } from "./FetchData";

const SearchForm: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const { searchBooks } = useFetchDataContext();
useEffect(() => {
  return () => {
       searchBooks('a');
  };
}, []);
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    searchBooks(query)
      .then(() => {})
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="d-flex" role="search">
        <div className="form-control rounded-pill  p-0 d-flex justify-content-center align-items-center">
          <input
            className="border-0 rounded-pill w-75 h-100 p-4 text-dark me-auto"
            aria-label="Search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books..."
          />
          <button className="fa-solid search-icon" type="submit">
            <i className=" fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
