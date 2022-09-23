import "bootstrap/dist/css/bootstrap.min.css";
import HomeComponent from "./homeComponent";
import LoginComponent from "./loginComponent";
import ScheduleComponent from "./scheduleComponent";
import LearningComponent from "./learningComponenet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileComponent from "./profileComponent";
import RegisterComponent from "./registerComponent";
import NavbarComponent from "./navbarComponent";
import ResetpasswordComponent from "./resetpasswordComponent";
import PasswordComponent from "./passwordComponent";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <NavbarComponent />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/schedule">
            <ScheduleComponent />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/learning">
            <LearningComponent />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/profile">
            <ProfileComponent />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/login">
            <LoginComponent />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/register">
            <RegisterComponent />
          </Route>
        </Switch>

        




        <Switch>
          <Route exact path="/resetpassword">
            <ResetpasswordComponent />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/otp">
            <PasswordComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
