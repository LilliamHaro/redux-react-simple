import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './Nav.css';

const mapStateToProps = state => {
  return { data: state.data };
};

const ConnectedNav = ({ data }) => (
  <nav>
    <div className="nav_logo">Logo</div>

    <ul className="nav_list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">vista 2</Link>
      </li>
      <li>
        <Link to="/vista3">vista 3</Link>
      </li>
      <li>
        Data: <strong> {data}</strong>
      </li>
    </ul>
  </nav>
);

const Nav = connect(mapStateToProps)(ConnectedNav);
export default Nav;
