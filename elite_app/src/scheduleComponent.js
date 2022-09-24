// import logo from "./logo.svg";
import "./App.css";
// import Home from "./homeComponent";
import NavbarComponent from "./navbarComponent";

import "bootstrap/dist/css/bootstrap.css";
import ContentColumn2 from "./contentColumn2";
import FooterComponent from "./footerComponent";

const ScheduleCompoonent = () => {
  return (
    <div>
      <NavbarComponent />

      <ContentColumn2 />
      <FooterComponent />
    </div>
  );
};

export default ScheduleCompoonent;
