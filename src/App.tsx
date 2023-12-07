import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";
import NotFound from "./Components/NotFound";
import { FetchDataProvider } from "./Components/FetchData";
import Footer from "./Components/Footer";
import "./styles/components/styles.css";
import { HashRouter } from "react-router-dom";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <Router>
        <FetchDataProvider>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />}>
              <Route path="/home/books/:bookId" element={<BookDetails />} />
            </Route>
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />{" "}
          </Routes>
          <Footer />
        </FetchDataProvider>
      </Router>
    </>
  );
}

export default App;
