import React, { Component } from 'react';
import "react-bootstrap/dist/react-bootstrap.min.js";
import { Helmet } from 'react-helmet';
import './App.css';
import NavigationBar from './components/navigation-bar/navigation-bar.jsx';


class App extends Component {
  render() {
    return (
      <div>
      <Helmet>
        <title>Marie Garcia</title>
      </Helmet>
        <NavigationBar />
      </div>
    );
  }
}

export default App;
