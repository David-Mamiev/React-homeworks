import { Component } from "react";

export class ToDoForm extends Component{
    state = {
        todoItem: {
            title: "123",
        },
    };

    onTitleChange = (e) => {
        console.log(e.target.value);
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }
    
    render(){
        return (
            <form onSubmit={() => this.onFormSubmit}>
                <input 
                    type="text" 
                    value={this.state.todoItem.title}
                    onChange={this.onTitleChange}
                ></input>
                <button>Добавить</button>
            </form>
        );
    }
}