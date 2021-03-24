import React, { Component } from "react";
import MainRouter from "./MainRouter";
//export {}
export class App extends Component {
  render() {
    return (
      <>
        <MainRouter />
      </>
    );
  }
}

//only one export default for each file
export default App;