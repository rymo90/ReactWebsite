import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import SideBar from "./sidebar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Redwan" };
  }
  render() {
    return (
      <Navbar className="Navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">BrandName</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#">
            News
          </NavItem>
          <NavItem eventKey={3} href="#">
            Video
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Home;
