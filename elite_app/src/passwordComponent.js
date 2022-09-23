
import "./password.css"
import Up from "./Images/up.png";
import Down from "./Images/down.png"
import Card from "react-bootstrap/Card";
import { Button } from "bootstrap";



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


        
  
        <Card.Img className="imgdown" src={Down} />
        
      </div>
    );
}
 
export default PasswordComponenet;