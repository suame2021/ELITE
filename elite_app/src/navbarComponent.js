import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./Images/logo.png";
import Image from 'react-bootstrap/Image';
import "./App.css";

const NavbarComponent = () => {

  return (
    <Container classname="Navigation">
      <Image src={logo} className="logo" />
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
  );
}
 
export default NavbarComponent;