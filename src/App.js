import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import './assets/less/main.scss';
// import 'semantic-ui-less/semantic.less';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
