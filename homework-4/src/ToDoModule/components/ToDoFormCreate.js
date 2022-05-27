import { Component } from "react";

export default class ToDoFormCreate extends Component{
    render(){
        return(
            <form className="toDoList__addTask"  onSubmit={this.props.onSubmit}>
                <input
                className="toDoList__add-input"
                type="text"
                placeholder="what you need to do?"
                onChange={this.props.onTitleChange}
                ></input>
                <button type="submit" className="toDoList__add-but">+</button>
            </form>
        )
    }
}