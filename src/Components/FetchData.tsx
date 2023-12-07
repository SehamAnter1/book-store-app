import React, { createContext, useState, useContext, ReactNode } from "react";
import axios, { AxiosResponse } from "axios";

interface Book {
  id: string;
  title: string;
  author_name: string[];
  cover_i: string;
  edition_count: string;
  description: string;
  subject_places: string;
  subject_times: string;
  subjects: string;
}

interface ResponseData {
  docs: Book[];
}

interface FetchDataContextValue {
  searchResults: Book[];
  searchBooks: (query: string) => Promise<void>;
}

const FetchDataContext = createContext<FetchDataContextValue>({
  searchResults: [],
  searchBooks: () => Promise.resolve(),
});

const FetchDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchResults, setSearchResults] = useState<Book[]>([]);

  const searchBooks = async (query: string) => {
    try {
      const response: AxiosResponse<ResponseData> = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );
      const books: Book[] = response.data.docs.map((book, index) => ({
        ...book,
        id: index.toString(),
      }));
      setSearchResults(books);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <FetchDataContext.Provider value={{ searchResults, searchBooks }}>
      {children}
    </FetchDataContext.Provider>
  );
};
const useFetchDataContext = () => useContext(FetchDataContext);

export { FetchDataProvider, useFetchDataContext };
