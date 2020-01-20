import React, { Component, Suspense } from 'react';

import './App.css';
import NewsFeed from "./components/NewsFeed"
import Header from "./components/Header"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NewsFeed/>
      </div>
    );
  }
}

export default App;
