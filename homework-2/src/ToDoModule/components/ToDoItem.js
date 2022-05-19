import { Component } from "react";
import "./TodoItem.scss";

export class ToDoItem extends Component{
    render(){
        return (
            <div className="todo-item">
                <span onClick={() => this.props.onItemComplete(this.props.item.id)}>✔</span>
                <span className={this.props.item.completed ? "completed" : "default"}>{this.props.item.title}</span>
                <button onClick={() => this.props.onItemDelete(this.props.item.id)}>X</button>
            </div>
        )
    }
}