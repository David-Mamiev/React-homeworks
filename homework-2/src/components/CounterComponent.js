import { Component } from "react";

export default class CounterComponent extends Component{
    state = {count: 0};

    constructor(name){
        super();
        console.log("construction");
    }

    render(){
        console.log("RENDERING");
        return (
            <div>
                <button onClick={() => this.clickHandler("+")}>+</button>
                <h1>Counter NAme: {this.props.name}</h1>
                <button onClick={() => this.clickHandler("-")}>-</button>
                <p onClick={this.props.notify("ITS FUCKING MASSAGE")}>Notify App.js component</p>
            </div>
        )
    }


    clickHandler(operator) {
        console.log(this);
        const count = operator === "+" ? this.state.count + 1 : this.state.count - 1;
        this.setState({count});
    }
}
