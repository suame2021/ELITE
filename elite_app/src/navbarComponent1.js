
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FUMIGATE from './img/FUMIGATE.png';
const navbarComponent  = () => {
    return ( 
        <Navbar bg="dark"  expand="lg">
        <Container>
       
          <Navbar.Brand href="#home">
            <image src={FUMIGATE} className="navHead"/>
            </Navbar.Brand>
          <image src={FUMIGATE} className="navHead"/>
          <Navbar.Toggle aria-controls="basic-nlavbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


     );
  
  }
  
   
  
  export default navbarComponent;