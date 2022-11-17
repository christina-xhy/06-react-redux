import React, { PureComponent } from 'react'
import store from '../store';
import { subNumberAction } from '../store/actioncreator';

export class Profile extends PureComponent {
  constructor(){
    super()
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counter });
    });
  }
  subNumber(num){
    store.dispatch(subNumberAction(num))
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>Profile Counter: {counter}</h2>
      <div>
        <button onClick={e => this.subNumber(1)}>-1</button>
        <button onClick={e => this.subNumber(2)}>-2</button>
        <button onClick={e => this.subNumber(5)}>-5</button>
      </div></div>
    )
  }
}

export default Profile