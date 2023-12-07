import React from "react";
import { useParams } from "react-router-dom";
import { useFetchDataContext } from "./FetchData";
import { Link } from "react-router-dom";
const BookDetails: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { searchResults } = useFetchDataContext();

  const selectedBook = searchResults.find((book) => book.id === bookId);

  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-details p-3">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <Link to="/" className="go-back">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
            </svg>
            Go Back
          </Link>
          <div className="cover col-12 col-md-4 col-lg-5 p-2">
            <img
              className="w-100 h-100"
              src={`http://covers.openlibrary.org/b/id/${selectedBook.cover_i}-M.jpg`}
              alt="Book Cover"
            />
          </div>
          <div className="description col-12 col-md-8 col-lg-7 p-2">
            <p className="d-flex justify-content-start align-items-center">
              <h2>title:</h2> {selectedBook.title}
            </p>
            <p className="d-flex justify-content-start align-items-center">
              <h2>Author:</h2> {selectedBook.author_name.join(", ")}
            </p>
            <p className="subject">
              The Lost World Subject Places: South America, England, London
              Subject Times: No subject times found Subjects: Adventure stories,
              Atlantis, Dinosaurs, Discovery and exploration, English Detective
              and mystery stories, Fiction, Fiction in English, Fiction in
              French, Prehistoric peoples, Professor Challenger (Fictitious
              character), Scientific expeditions, Translations into Czech,
              Translations into Russian, Science fiction, Fantasy, Discoveries
              in geography, Children's fiction, Dinosaurs, fiction, Fiction,
              fantasy, general, Fiction, action & adventure, Challenger,
              professor (fictitious character), fiction, South america, fiction,
              Books and reading, Public libraries, Activity programs, Criticism
              and interpretation, Reading promotion, Young adults' libraries,
              Westminster Libraries and Archives, Youth, Lost world (Doyle,
              Arthur Conan), Children, British and irish fiction (fictional
              works by one author), Fiction, science fiction, general,
              Scientists, fiction, English literature, Large type books,
              Fiction, historical, general, Romans, nouvelles, Dinosaures,
              Challenger, Professor (Personaje literario), Novela, Pueblos
              prehistóricos, Dinosaurios, Adventure and adventurers, fiction,
              Fiction, general, Challenger, Professor (Fictitious character) --
              Fiction, Fantasy fiction, South America -- Fiction, Prehistoric
              peoples -- Fiction, Dinosaurs -- Fiction, Literature and fiction,
              action and adventure, New York Times reviewed, Prehistoric
              peoples, fiction, Scientific expeditions, fiction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
