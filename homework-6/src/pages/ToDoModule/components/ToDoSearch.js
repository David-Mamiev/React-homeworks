import { Component } from "react";

export default class ToDoSeach extends Component{
    render(){
        return (
            <form>
                <input type="text" placeholder="Search" className="toDoList__search"></input>
            </form>
        )
    }
}