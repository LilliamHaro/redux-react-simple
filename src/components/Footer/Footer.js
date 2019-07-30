
import React from "react";
import { connect } from "react-redux";
import './Footer.css';


const mapStateToProps = state => {
  return { modo: state.modo };
};

const ConnectedList = ({ modo }) => (

  <footer>
  <ul className="list-group list-group-flush">

{ modo ? (<h4>Modo: activo </h4>) : (<h4>Modo: Desactivado </h4>)}
</ul>
  </footer>
);
const Footer = connect(mapStateToProps)(ConnectedList);

export default Footer;
