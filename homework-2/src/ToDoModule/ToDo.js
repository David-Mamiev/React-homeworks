import { Component } from "react";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

export class ToDo extends Component {
    render() {
        return(
            <>
                <ToDoForm />
                <ToDoList />
            </>
        )
    }
}