import React, { PureComponent } from "react";
import Home from "./pages/home";
import { Profile } from "./pages/profile";
import "./style.css";
import store from "./store";
import About from "./pages/about";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: store.getState().counter,
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counter });
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="pages">
        <h2>App Counter : {counter}</h2>
        <Home />
        <Profile />
        <About />
      </div>
    );
  }
}

export default App;
