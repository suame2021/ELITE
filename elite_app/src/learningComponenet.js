
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import image1 from "./Images/image1.png";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
import Arrow from "./Images/arrow.png";
import Process from "./Images/process1.png";
import "./App.css";
import FooterComponent from "./footerComponent";
import NavbarComponent from "./navbarComponent";



const LearningComponent = () => {
  return (
    <div>
      <NavbarComponent/>
      <div className="learn">
        <Row className="container-fluid mt-5">
          <Col xs={12} md={7} lg={7}>
            <div className="move"></div>
            <p className="txt4">Manage Your waste and enable a</p>
            <p className="txt4">clean and pollution free environment</p>
            <div className="learning">
              <Col xs={12} md={2} lg={2}>
                <p className="lt"> 01 </p>
                <p className="lt2"> Separate waste </p>
                <Image src={image1} className="img1" />
              </Col>
              <Col xs={12} md={2} lg={2}>
                <Image src={Arrow} className="img2" />
              </Col>

              <Col xs={12} md={2} lg={2}>
                <p className="lt"> 02 </p>
                <p className="lt2"> Schedule pickup </p>
                <Image src={image4} className="img1" />
              </Col>

              <Col xs={12} md={2} lg={2}>
                <Image src={Arrow} className="img2" />
              </Col>

              <Col xs={12} md={2} lg={2}>
                <p className="lt"> 03 </p>
                <p className="lt2"> Pick up </p>
                <Image src={image3} className="img1" />
              </Col>
            </div>
          </Col>

          <Col xs={12} md={5} lg={5}>
            <Image src={Process} className="img1" />
          </Col>
        </Row>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default LearningComponent;
