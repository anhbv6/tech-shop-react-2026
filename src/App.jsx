import React from "react";
import Home from "./pages/Home";
import AppRoter from "./app/router";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: "viet",
    }
    console.log("1.constructor");
  }

  componentDidMount() {
    console.log("2.component did mount");
  }

  componentDidUpdate() {
    console.log("3.component did update");
  }

  componentWillUnmount() {
    console.log("4.component will un mount");
  }

  render () {
    console.log("5.render");
    return (
      <AppRoter />
    )
  }
}