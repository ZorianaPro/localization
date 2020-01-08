import React, { Component, Suspense } from 'react';
import './App.css';
import L18nextComponent from "./components/I18next";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <L18nextComponent/>
      </div>
    );
  }
}

export default App;
