import logo from "./logo.svg";
import "./App.css";
import Home from "./homeComponent";
import NavbarComponent from "./navbarComponent";
import 'bootstrap/dist/css/bootstrap.css';
import FooterComponent from "./footer";
import ContentColumn2 from "./contentColumn2";
import LoginComponent from "./loginComponent";



function App() {
  return (
    <div className="App">
      <div>
        {/* <NavbarComponent /> */}

        <LoginComponent />
        <ContentColumn2 />
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
