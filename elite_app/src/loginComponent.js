import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./App.css";
import "./login.css";


const LoginComponenet = () => {
  return (

    <Row className="container-fluid mt-5">
      <Col xs={12} md={6} lg={3}>
        <div classname fcolumn></div>
      </Col>

      <Col xs={12} md={6} lg={6}>
        <div classname fcolumn></div>
    
      <Form className="login">
        <Form.Group className="mb-3" controlId="formBasicusername">
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicReset">
          <Form.Control type="password" placeholder="Reset Password">
            </Form.Control>{" "}
        </Form.Group>
        
       </Form>
      </Col>

      <p className="forget">Forget Password?</p>

      </Row>
    
  );
};

export default LoginComponenet;
