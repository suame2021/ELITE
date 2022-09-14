
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FooterLogo from "./Images/footerlogo.png";
import Image from "react-bootstrap/Image";
import SubmissionForm from "./submissionComponent";
const FooterComponent = () => {
    return (
      <footer className="bg-black p-2">
        <Row className="container-fluid mt-5">
          <Col xs={12} md={4} lg={3}>
            <div className="p-3">
              <img
                src={FooterLogo}
                style={{ maxWidth: "180px" }}
                alt="my logo"
              />
            </div>
          </Col>

          <Col xs={12} md={4} lg={3}>
            <Row className="container-fluid mt-5">
              <Col xs={12} md={4} lg={3}>
                <div className="contain">
                  <h3 className="text-light">Contact Us</h3>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <div className>
                  <h3 className="text-light">Address</h3>
                </div>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <div className>
                  <h3 className="text-light">Address</h3>
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={12} md={4} lg={3}>
            <div className="p-3">
            
              <SubmissionForm />
            </div>
          </Col>
        </Row>
      </footer>
    );
}
 
export default FooterComponent;