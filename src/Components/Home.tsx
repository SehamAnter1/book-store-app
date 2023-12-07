import React from "react";
import { Outlet } from "react-router";
import BookList from "./BookList";
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
