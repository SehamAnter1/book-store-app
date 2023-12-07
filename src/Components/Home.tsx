import { Outlet } from "react-router";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
