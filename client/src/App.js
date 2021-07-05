import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/home";
import Navbar from "./components/layout/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEmployee from "./components/employees/addEmployee";
import EditEmployee from "./components/employees/editEmployee";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/employees/add" component={AddEmployee} />
          <Route exact path="/employees/edit/:id" component={EditEmployee} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
