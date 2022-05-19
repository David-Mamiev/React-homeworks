import { Component } from "react";
import ToDoDescription from "./ToDoDescription";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component{
    state = {
        list: [
            {id: 1, title: "Water Plants", description: "on the kitchen, dining room and first floor.", completed: false, clicked: false, history: [{field: "", action: "", prevValue: "", currentValue: "", appliedAt: ""}]},
            {id: 2, title: "Pack the bags", description: "preparation for trip to London", completed: false, clicked: false, history: [{field: "", action: "", prevValue: "", currentValue: "", appliedAt: ""}]},
            {id: 3, title: "Charge laptop", description: "preparation for trip to London", completed: false, clicked: false, history: [{field: "", action: "", prevValue: "", currentValue: "", appliedAt: ""}]},
            {id: 4, title: "Post homeworks to Hillel Course", description: "React Froup from 30.04.2022 (every Saturday)", clicked: false, completed: false, history: [{field: "", action: "Created task with title “Post homeworks to Hillel Course”", prevValue: "", currentValue: "", appliedAt: "Monday, 16 May 2022 at 12:59 pm"}, {field: "", action: "Changed task description from “React Group 30.04.2022” to “React Group from 30.04.2022 (every Saturday)", prevValue: "", currentValue: "", appliedAt: "Monday, 16 May 2022 at 1:24 pm"}]},
            {id: 5, title: "Make backup of HDD", description: "Use TimeMachine for that", completed: false, clicked: false, history: [{field: "", action: "", prevValue: "", currentValue: "", appliedAt: ""}]},
        ],
    };
    onItemCompleteHandler = (id) => {
        const item1 = this.state.list.find((el) => el.id === id);
        const updatedItem1 = {...item1, completed: !item1.completed};
        this.setState({
            list: this.state.list.map((todoItem) => todoItem.id === id ? updatedItem1 : todoItem)
        });
    };
    onItemClickHandler = (id) => {
        const item = this.state.list.find((el) => el.id === id);
        const updatedItem = {...item, clicked: !item.clicked}
        this.setState({
            list: this.state.list.map((todoItem) => todoItem.id === id ? updatedItem : {...todoItem, clicked: false})
        });
    }
    render(){
        return(
            <div className="app">
                <div className="toDoList">
                    <h2 className="toDoList__title">Todos</h2>
                    <input type="text" placeholder="Search" className="toDoList__search"></input>
                    <ul className="toDoList__items">
                        {this.state.list.map((todoItem) => 
                            <ToDoItem 
                                key={todoItem.id}
                                item={todoItem}   
                                onItemComplete={this.onItemCompleteHandler} 
                                onItemClick={this.onItemClickHandler}
                            />
                        )}
                    </ul>
                    <div className="toDoList__addTask">
                      <textarea className="toDoList__add-input" type="text" placeholder="what you need to do?"></textarea>
                        <button className="toDoList__add-but">+</button>
                    </div>
                </div>
                {this.state.list.map((todoItem) => todoItem.clicked ? <ToDoDescription item={todoItem} key={todoItem.id}/> : null)}
            </div>
        )
    }
}