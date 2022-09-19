import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./App.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import imageFile from "./Images/image2.png";

function RegisterComponent() {
  return (
    <Row className="container-fluid mt-5">
      <Col xs={12} md={6} lg={3}>
        <div classname fcolumn></div>
      </Col>

      <Col xs={12} md={6} lg={6}>
        <div classname fcolumn></div>

        <Form className="register">
          <Form.Group className="mb-3" controlId="formBasicusername">
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Address"
            ></Form.Control>{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhonenumber">
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Control type="text" placeholder="Address"></Form.Control>{" "}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicReset">
            <Form.Control
              type="password"
              placeholder="Reset Password"
            ></Form.Control>{" "}
          </Form.Group>
        </Form>
      </Col>

      <Col xs={12} md={4} lg={3}>
        <Card style={{ width: "10rem" }}>
          <Card.Img variant="top" src={imageFile} />
        </Card>

        <div>
          <Button className="btnsub" type="submit">
            Sign Out
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default RegisterComponent;
