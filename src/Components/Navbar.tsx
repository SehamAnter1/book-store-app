import logo from "./../images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a
          className=" navbar-brand d-flex justify-content-space-between align-items-center"
          href="#"
        >
          <img className="w-25 me-2" src={logo} alt="" />
          <strong>BOOKHUB</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                <Link to={"/home"} className="navLink text-dark">
                  {" "}
                  <strong>Home</strong>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">
                <Link to={"/about"} className="navLink text-dark">
                  <strong>About</strong>
                </Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
