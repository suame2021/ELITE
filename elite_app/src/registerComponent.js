import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./login.css";
import google from "./Images/google.svg";
import facebook from "./Images/facebook.svg";
import Linkedin from "./Images/Linkedin.svg";
import Card from "react-bootstrap/Card";
import FooterComponent from "./footerComponent";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavbarComponent from "./navbarComponent";


function RegisterComponent() {
  return (
    <div>
      <NavbarComponent/>
      <Row className="container-fluid mt-5">
        <Col xs={12} md={4} lg={5}>
        
            <p className="welcome">Welcome,</p>
            <p className="welcome1">Please Create an Account</p>
          
        </Col>

        <Col xs={12} md={6} lg={6}>
          <div classname="fcolumn">
            <Form className="register1">
              <Form.Group className="mb-3" controlId="formBasicusername">
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhonenumber">
                <Form.Control type="text" placeholder="Phone Number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicReset">
                <Form.Control
                  type="password"
                  placeholder="Reset Password"
                ></Form.Control>
              </Form.Group>
            </Form>
          </div>
          <div>
            <LinkContainer to="/login">
                <Nav.Link>        
                  <Button className="btnsignup" type="submit">
             SIGN UP
            </Button>
             </Nav.Link>
              </LinkContainer>

            
          </div>
          <div className="foot2">
            <p className="cont4">Or Continue With</p>
            <div className="social">
              <Card.Img className="google" src={google} />
              <Card.Img className="facebook" src={facebook} />
              <Card.Img className="linkedin" src={Linkedin} />
            </div>

            <p className="cont4">Already have an account? Login</p>
          </div>
        </Col>
      </Row>
      <FooterComponent />
    </div>
  );
}

export default RegisterComponent;
