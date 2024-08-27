import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{ height: "40px", padding: "10px", backgroundColor: "lightcyan" }}
    >
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/search"
      >
        Search
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/todo"
      >
        Todo
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/pagination"
      >
        Pagination
      </NavLink>{" "}
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/stopwatch"
      >
        Stopwatch
      </NavLink>{" "}
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/table"
      >
        Table
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/accordion"
      >
        Accordion
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/infiniteScroll"
      >
        InfiniteScroll
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/tabs"
      >
        Tabs
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/form"
      >
        Form
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/progress"
      >
        Progress
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/emoji"
      >
        Emoji Search
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/star"
      >
        Star rating{" "}
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/todolist"
      >
        TodoList{" "}
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/password"
      >
        Password{" "}
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/dummy"
      >
        Dummy{" "}
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/dropdown"
      >
        Dropdown{" "}
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/hoc"
      >
        HOC{" "}
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
          fontWeight: 600,
          padding: "8px",
        }}
        to="/child"
      >
        ChildtoParent{" "}
      </NavLink>
    </div>
  );
};

export default Header;
