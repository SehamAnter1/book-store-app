import logo from "../../src/images/logo.png";

function Footer() {
  return (
    <footer className="footer py-3">
      <div className="container">
        <img className="me-2" width={60} src={logo} alt="" />
        <span className="">BOOKHUB All Rights Reserved © Seham</span>
      </div>
    </footer>
  );
}

export default Footer;
