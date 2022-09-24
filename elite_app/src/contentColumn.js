// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import imageFile from "./Images/vvv.png";
// import Image from "react-bootstrap/Image";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import "./App.css";


const ContentColumn = () => {
  return (
    <div className="content">
      <Row className="container-fluid mt-5">
        <Col xs={12} md={6} lg={6}>
          <div className="text">
            At ELITE we strongly believe in Patnering with you for a safer,
            cleaner and better environment by helping you keep tack of your
            schedule dates and also teach you more about segregation of waste
            and recycling of waste....... read more
          </div>
          <button className="btn5">Get Started</button>
        </Col>

        <Col xs={12} md={4} lg={3}>
         
          <img src={imageFile} alt="logo" className='file'/>
        </Col>
      </Row>
    </div>
  );
};

export default ContentColumn;
