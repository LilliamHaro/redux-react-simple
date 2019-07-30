import React from 'react'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = (props) => (
  <main className="mainLayout">
    <Nav/>
      {props.children}
  <Footer/>
  </main>
)

export default Layout
