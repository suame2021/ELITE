
import "./password.css"
import Up from "./Images/up.png";
import Down from "./Images/down.png"
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";



const PasswordComponenet = () => {
    return (
      <div className="fullpage">
        {/* <div className="col text-center"> */}
        <Card.Img className="imgup" src={Up} />
        <div>
          <input
            className="otp"
            type="text"
            name="otp"
            maxLength="1"
            placeholder="Enter Your Email Address"
          />
          <p className="aut">AUTHENTICATE AND SEND OTP</p>
        </div>
        <input className="otp-field" type="text" name="otp" maxLength="1" />
        <input className="otp-field" type="text" name="otp" maxLength="1" />
        <input className="otp-field" type="text" name="otp" maxLength="1" />
        <input className="otp-field" type="text" name="otp" maxLength="1" />
        <input className="otp-field" type="text" name="otp" maxLength="1" />
        <input className="otp-field" type="text" name="otp" maxLength="1" />
        <p className="aut1">Resend code</p>

        <LinkContainer to="/resetpassword">
          <Nav.Link>
            <Button className="cont">CONTINUE</Button>
          </Nav.Link>
        </LinkContainer>

        <Card.Img className="imgdown" src={Down} />
      </div>
    );
}
 
export default PasswordComponenet;
