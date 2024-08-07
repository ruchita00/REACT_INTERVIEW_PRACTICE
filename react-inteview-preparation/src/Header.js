import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/todo">Todo</NavLink>
      <NavLink to="/pagination">Pagination</NavLink>{" "}
      <NavLink to="/stopwatch">Stopwatch</NavLink>{" "}
      <NavLink to="/table">Table</NavLink>
      <NavLink to="/accordion">Accordion</NavLink>
      <NavLink to="/infiniteScroll">InfiniteScroll</NavLink>
      <NavLink to="/tabs">Tabs</NavLink>
      <NavLink to="/form">Form</NavLink>
    </div>
  );
};

export default Header;
