import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterLogo from "./Images/footerlogo.png";
import Button from "react-bootstrap/Button";
import  FB from "./Images/facebook.svg";
import LKN from "./Images/Linkedin.svg"


const FooterComponent = () => {
  return (
    <footer className="bg-white">
      <Row className="container-fluid mt-5">
        <Col xs={12} md={2} lg={2}>
          <div className="p-3">
            <img src={FooterLogo} className="footimg" alt="my logo" />
          </div>
        </Col>
        <Col xs={12} md={8} lg={7}>
          <Row className="container-fluids mt-5">
            <Col xs={12} md={4} lg={3}>
              <div className="p-3">
                <h3 className="text-black">ABOUT US</h3>
              </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <div className="p-3">
                <h3 className="text-black">CONTACT US</h3>
              </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <div className="p-3">
                <h3 className="text-black">BLOG</h3>
              </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
              <div className="p-3">
                <h3 className="text-black">FAQ</h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="media">
              {/* <div className="all"> */}
                <div className="connect">
                  <p>Connect with us :</p>
                </div>
                <img src={FB} className="sco" alt="Facebook" />
                <img src={LKN} className="sco" alt="Linkedin" />
              {/* </div> */}
            </Col>
            <Row>
              <Col className="Adress">
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </Col>
            </Row>
          </Row>
        </Col>
        <Col xs={12} md={2} lg={3}>
          <div className="sub">
            <input
              className="email1"
              type="text"
              name="email"
              placeholder="Enter your Email"
            />
            <Button className="btnsubmit" type="submit">
              SUBSCRIBE
            </Button>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default FooterComponent;
