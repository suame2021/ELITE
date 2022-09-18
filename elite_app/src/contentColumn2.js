import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from "./Images/image.png";
import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CalenderComponent from "./calenderComponent";
import "./App.css";

const ContentColumn = () => {
  return (
    <div>
      <h4 className="picked">
        {" "}
        How often do you want your waste to be picked up?
      </h4>

      <button className="btn-success">Weekly</button>
      <button className="btn-success">Every Forthnight</button>

      <div className="content">
        <Row className="container-fluid mt-5">
          <Col xs={12} md={6} lg={6}>
            <div className="text">
              <CalenderComponent />
            </div>
            <div>
              <button className="btn-success1">Confirm</button>
              <button className="btn-success1">Call Agency</button>
            </div>
          </Col>

          <Col xs={12} md={4} lg={3}>
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src={image1} />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContentColumn;
