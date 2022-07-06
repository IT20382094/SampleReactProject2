import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }
    
    increment(){
        // Not increment in the UI only increment in the console log
        // this.state.count = this.state.count + 1
        // console.log(this.state.count);
        //Never modify the state directly because react doesnt re render the components

        // the console is one count back from the UI So lets use callbacks
        // this.setState({
        //     count:this.state.count + 1
        // })
        // console.log(this.state.count)

        // cannot call incrementFive method
        // this.setState({
        //     count:this.state.count + 1
        // },()=>{console.log('Callback value', this.state.count)})
        // console.log(this.state.count)

        //can call the incrementFive method 
        this.setState((prevState)=>({
            count:prevState.count + 1
        }))
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter;
