import { Component } from "react";

export class StateComponent extends Component {
    constructor(){
        super();
        this.state = {hrefs: [
            {href: '1.html', text: 'ссылка 1'},
            {href: '2.html', text: 'ссылка 2'},
            {href: '3.html', text: 'ссылка 3'},
	    ]}
    }
    componentDidMount(){
        console.log("COMPONENT DID MOUNT")
    }
    componentWillUnmount(){
        console.log("I am dieyng");
    }
    render(){
        const list = this.state.hrefs.map((el, i) => {
            return <li key={i}><a href={el.href}> {el.text} </a></li>
        });
        return(
            <>
                <h1>heello {this.props.name}</h1>
                <p onClick={this.props.notifyмешо("HELLO FROM COMPONENT")}>Notify App.js component man </p>
                <ul>
                    {list}     
                </ul>
            </>
        )
    }
}