import { Component } from "react";

export default class ToDoDescription extends Component{
    render(){
        return(
            <div className="todo-description">
                <h1 className="todo-description__title">{this.props.item.title}</h1>
                <p className="todo-description__par">{this.props.item.description}</p>
                <div className="todo-description__history-block">
                    <h6 className="todo-description__title">History</h6>
                    {
                        this.props.item.history.map((item) => {
                            return (
                                <div className={item.action !== "" ? "todo-description__history history" : "todo-description__history"} key={item.appliedAt}>
                                    <p className="history__action">{item.action}</p>
                                    <p className="history__data">{item.appliedAt}</p>
                                </div>  
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}