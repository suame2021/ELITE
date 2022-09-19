import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Images/logo.png";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="nav">
      <Container className="container-fluid" fluid>
        <Container classname="Navigation">
          <LinkContainer to="/">
            <Navbar.Brand href="#home" id="logo">
              <Image src={logo} className="logo" />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar>
            <Container>
              <Nav className="NavBar">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Schedule</Nav.Link>
                <Nav.Link href="#pricing">Learning</Nav.Link>
                <Nav.Link href="#features">Profile</Nav.Link>
                <Nav.Link href="#pricing">Notification</Nav.Link>
                <Nav.Link href="#features">Login in</Nav.Link>
                <Nav.Link href="#pricing">Sign Up</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Container>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
