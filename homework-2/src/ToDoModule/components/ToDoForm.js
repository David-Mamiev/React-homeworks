import { Component } from "react";

export class ToDoForm extends Component{
    state = {
        todoItem: {
            title: "Demo ToDo...",
        },
    };

    onTitleChangeHandler = ({target}) => {
        this.setState({todoItem: {...this.state.todoItem, title: target.value}});
    };

    onFormSubmitHandler = (event) => {
        event.preventDefault();
        const newItem = {...this.state.todoItem, id: 10, complete: false};
        this.props.onToDoAdd(newItem);
    }
    
    render(){
        return (
            <form className="ToDoForm" onSubmit={this.onFormSubmitHandler}>
                <input 
                    type="text" 
                    value={this.state.todoItem.title}
                    onChange={this.onTitleChangeHandler}
                ></input>
                <button>Добавить</button>
            </form>
        );
    }
}