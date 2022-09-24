import "./password.css";
import Up from "./Images/up.png";
import Down from "./Images/down.png";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

const ResetPasswordComponent = () => {
  return (
    <div className="fullpage">
      {/* <div className="col text-center"> */}
      <Card.Img className="imgup" src={Up} />
      <div></div>
      <div className="fullpage">
        <div className="passw">
          <h2 className="reseting">Reset Password</h2>
        </div>

        <div>
          <input
            className="pass-field2"
            type="text"
            name="otp"
            placeholder="Enter your new password"
          />
        </div>

        <div>
          <input
            className="pass-field3"
            type="text"
            name="otp"
            placeholder="Retype your new password"
          />
        </div>
      </div>
      <LinkContainer to="/">
        <Nav.Link>
          <Button className="cont1">ENTER</Button>
        </Nav.Link>
      </LinkContainer>

      <Card.Img className="imgdown" src={Down} />
    </div>
  );
}

export default ResetPasswordComponent;
