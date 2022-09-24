import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Images/logo.png";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";


const NavbarComponent = () => {
  return (
    <div>
      <LinkContainer to="/">
        <Nav.Link>
          <Image src={logo} className="logo" />
        </Nav.Link>
      </LinkContainer>

      <Navbar>
        <Container>
          <Nav className="NavBar">
            
            <LinkContainer to="/">
              <Nav.Link className="home">Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/schedule">
              <Nav.Link className="schedule">Schedule</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/learning">
              <Nav.Link className="learning">Learning</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/profile">
              <Nav.Link className="profile">Profile</Nav.Link>
            </LinkContainer>

            <Nav.Link to="pricing" className="notice">
              Notification
            </Nav.Link>

            <LinkContainer to="/login">
              <Nav.Link className="login">Login in</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/register">
              <Nav.Link className="signup">Sign Up</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
