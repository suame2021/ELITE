import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./login.css";
import google from "./Images/google.svg";
import facebook from "./Images/facebook.svg";
import Linkedin from "./Images/Linkedin.svg";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import FooterComponent from "./footerComponent";




const LoginComponenet = () => {
  return (
    <div className="loginb">
      <Row className="container-fluid mt-5">
        <Col xs={12} md={6} lg={3}>
          <div classname fcolumn></div>
        </Col>

        <Col xs={12} md={6} lg={6}>
          <div classname fcolumn>
            <Form className="login">
              <Form.Group className="mb-3" controlId="formBasicusername">
                <h2 className="welcome">
                  Welcome, Please Login to your Account
                </h2>
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicReset">
                <Form.Control
                  type="password"
                  placeholder="Password"
                ></Form.Control>
              </Form.Group>

              <LinkContainer to="otp">
                <Nav.Link>
                  <p className="forget">Forget Password?</p>
                </Nav.Link>
              </LinkContainer>
            </Form>
          </div>
          <div>
            <LinkContainer to="/">
              <Nav.Link>
                <Button className="btnlogin" type="submit">
                  LOGIN
                </Button>
              </Nav.Link>
            </LinkContainer>
          </div>
        </Col>
      </Row>

      <Row className="foot ">
        <p className="cont4">Or Continue With</p>
        <div className="social">
          <Card.Img className="google" src={google} />
          <Card.Img className="facebook" src={facebook} />
          <Card.Img className="linkedin" src={Linkedin} />
        </div>

        <p className="cont4">Already have an account? Login</p>
      </Row>
      <FooterComponent />
    </div>
  );
};

export default LoginComponenet;
