import SearchForm from "./Search";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="header_content mx-auto col-10 col-md-8 col-lg-6">
            <h1 className="title">Find Your Book Of Choice.</h1>
            <p className="decsription">
              offering a delightful array of reading materials that cater to
              diverse interests. It is a place where the aroma of fresh pages
              and the sight of colorful book spines create an inviting
              atmosphere. Bookstores provide a sanctuary for imagination,
              knowledge, and the joy of reading.
            </p>
            <SearchForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
