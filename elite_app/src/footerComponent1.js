import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import logo from "./logo.svg"
import FUMIGATE from './img/FUMIGATE.png';
import SubmissionForm from "./submissionComponent";
const FooterComponent = () => {
    return ( 
        <footer className="bg-dark p-2">
          <Row className="container-fluid mt-5">
            
                 
            
         
            <Col xs={12} md={4} lg={3}>
               <div className="p-3">
               <h3 className="text-light">
                    Contact Us
                </h3>
               
               </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
               <div className="p-3">
               <h3 className="text-light">
                    Address
                </h3>
                 
               </div>
            </Col>
            <Col xs={12} md={4} lg={3}>
               <div className="p-3">
                <h3 className="text-light">
                    Subscribe
                </h3>
               </div>
            </Col>
          </Row>


          
        </footer>
     );
}
 
export default FooterComponent;