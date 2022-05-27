import { Component } from "react";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

export class ToDo extends Component {
    onToDoAddHandler = (newItem) => {
        console.log(newItem);
    };
    
    render() {
        return(
            <>
                <ToDoForm onToDoAdd={this.onToDoAddHandler}/>
                <ToDoList />
            </>
        )
    }
}