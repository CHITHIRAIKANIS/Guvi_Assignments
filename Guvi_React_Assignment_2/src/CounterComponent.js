import React, {Component, useState , useEffect} from 'react';
class CounterComponent extends Component{
    constructor(props){
        console.log(props);
        super(props);
        this.state={
            initialValue : 5

        }
    }
    handleIncrement =  () => {
        this.setState({initialValue : this.state.initialValue + 1 })
    }
    reset = () => {
        this.setState({initialValue : 5})
    }
    render(){
        
        const sum=(a,b) => {
            return a+b;
        }
        return(
            <>
            <h3>{this.props.componentName} Component</h3>
            <h4>initial Value : {this.state.initialValue} </h4>
            <button onClick={this.handleIncrement}>Increment</button> &nbsp;
            <button onClick={() => this.setState({initialValue : this.state.initialValue -1})}>Decrement</button> &nbsp;
            <button onClick={() => this.setState({initialValue : 5 })}>Reset</button> 
            </>
        )
    }
}
export default CounterComponent;