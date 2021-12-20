
import './App.css';
import React,{Component} from 'react';
class CounterComponent extends Component{
    constructor (props)
    {
        super(props);
        this.state={initialvalue:5,temp:5}
     }
    render(){
        return(
            <>
            <h3>{this.props.componentname} component </h3>
            <h4>intitial value:{this.state.initialvalue}</h4>
            <button className="btn" onClick={()=>this.setState({initialvalue:this.state.initialvalue+1})}>increment</button>&nbsp;
            <button className="btn" onClick={()=>this.setState({initialvalue:this.state.initialvalue-1})}>decrement</button>&nbsp;
            <button className="btn" onClick={()=>this.setState({initialvalue:this.state.temp})}>Reset</button>
           </>
        )
    }
}
export default CounterComponent;