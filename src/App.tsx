import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import BookDetails from "./Components/BookDetails";
import NotFound from "./Components/NotFound";
import { FetchDataProvider } from "./Components/FetchData";
import Footer from "./Components/Footer";
import "./styles/components/styles.css";
import Home from "./Components/Home";
function App() {
  return (
    <>
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
    </>
  );
}

export default App;
