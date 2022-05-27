import { Component } from "react";
import  { ToDoItem }  from "./ToDoItem";

export class ToDoList extends Component{
    state = {
        list: [
            {id: 1, title: "Помыть полы", completed: false},
            {id: 2, title: "Выексти мусор", completed: false},
            {id: 3, title: "Выложить еовую дз", completed: false},
        ],
    };


    onItemCompleteHandler = (id) => {
        const item = this.state.list.find((todoItem) => todoItem.id === id);
        const updatedItem = {...item, completed: !item.completed};

        this.setState({
            list: this.state.list.map((todoItem) => todoItem.id === id ? updatedItem : todoItem)
        })
    }

    onItemDeleteHandler = (id) => {
        this.setState({
            list: this.state.list.filter((todoItem) => todoItem.id !== id),
        })
    }

    render(){
        return (
            <div>
                <ul>
                    { this.state.list.map((todoItem) => 
                        <ToDoItem 
                            key={todoItem.id} 
                            item={todoItem} 
                            onItemComplete={this.onItemCompleteHandler}
                            onItemDelete={this.onItemDeleteHandler} 
                        />) }
                </ul>
            </div>
        )
    }
}