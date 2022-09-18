import React from "react";

import CalenderComponent from "./calenderComponent";
import LoginComponenet from "./loginComponent";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

export default function App() {
  let activeClassName = "nav-active";
  return (
    <BrowserRouter>
      <header>
        <h1>Hello World</h1>
      </header>
      <nav>
        <NavLink
          to=""
          className={({ isActive }) => isActive && activeClassName}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => isActive && activeClassName}
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => isActive && activeClassName}
        >
          Contact
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<LoginComponenet />} />
        <Route path="about" element={<CalenderComponent />} />
        
      </Routes>
    </BrowserRouter>
  );
}
