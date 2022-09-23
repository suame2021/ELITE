import "./password.css";


const ResetPasswordComponent = () => {
  return (
    <div className="fullpage">
      <div>
        <input className="pass-field1" type="text" name="otp"/>
      </div>

      
      <div>
        <input className="pass-field2" type="text" name="otp"   placeholder="Enter your new password"/>
      </div>

      
      <div>
        <input className="pass-field3" type="text" name="otp"   placeholder="Retype your new password"/>
        
      </div>
      </div>
  );
}

export default ResetPasswordComponent;
