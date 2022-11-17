import React, { PureComponent } from 'react'
import store from '../store';
import { addNumberAction } from '../store/actioncreator';



export class Home extends PureComponent {
  constructor(){
    super()
    this.state = {
      counter : store.getState().counter
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({ counter: state.counter });
    });
  }
  addNumber(num){
    store.dispatch (addNumberAction(num))
  }
  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <div>
          debugger
          <button onClick={e =>(this.addNumber(1))}>+1</button>
          <button onClick={e =>(this.addNumber(2))}>+2</button>
          <button onClick={e =>(this.addNumber(5))}>+5</button>
        </div>
      </div>
    )
  }
}

export default Home