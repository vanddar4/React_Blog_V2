import React from "react";
import {Link} from "react-router-dom";

const Header = props => (
  <header className="App-Header">
    <ul className="container">
      <li key="home">
        <Link to="/">Vanddar4 Blog!</Link>
      </li>
      <li>
        <Link to="/new">New Post</Link>
      </li>
    </ul>
  </header>
);

export default Header;