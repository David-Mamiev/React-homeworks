import { Component } from "react";
import ToDoDetails from "./ToDoDetails";
import ToDoFormCreate from "./ToDoFormCreate";
import ToDoItem from "./ToDoItem";
import ToDoSearch from "./ToDoSearch";
import { onHistoryChange } from "../../utils/utils";

export default class ToDoList extends Component {
  
  state = {
    list: [
      {
        id: 1,
        title: "Water Plants",
        description: "on the kitchen, dining room and first floor.",
        completed: false,
        clicked: false,
        history: [
          {
            id: 1,
            field: "",
            action: "",
            prevValue: "",
            currentValue: "",
            appliedAt: "",
          },
        ],
      },
      {
        id: 2,
        title: "Pack the bags",
        description: "preparation for trip to London",
        completed: false,
        clicked: false,
        history: [
          {
            id: 1,
            field: "",
            action: "",
            prevValue: "",
            currentValue: "",
            appliedAt: "",
          },
        ],
      },
      {
        id: 3,
        title: "Charge laptop",
        description: "preparation for trip to London",
        completed: false,
        clicked: false,
        history: [
          {
            id: 1,
            field: "",
            action: "",
            prevValue: "",
            currentValue: "",
            appliedAt: "",
          },
        ],
      },
      {
        id: 4,
        title: "Post homeworks to Hillel Course",
        description: "React Froup from 30.04.2022 (every Saturday)",
        clicked: false,
        completed: false,
        history: [
          {
            id: 1,
            field: "",
            action: "Created task with title “Post homeworks to Hillel Course”",
            prevValue: "",
            currentValue: "",
            appliedAt: "Monday, 16 May 2022 at 12:59 pm",
          },
          {
            id: 2,
            field: "",
            action:
              "Changed task description from “React Group 30.04.2022” to “React Group from 30.04.2022 (every Saturday)",
            prevValue: "React Group 30.04.2022",
            currentValue: "React Group from 30.04.2022 (every Saturday)",
            appliedAt: "Monday, 16 May 2022 at 1:24 pm",
          },
        ],
      },
      {
        id: 5,
        title: "Make backup of HDD",
        description: "Use TimeMachine for that",
        completed: false,
        clicked: false,
        history: [
          {
            id: 1,
            field: "",
            action: "",
            prevValue: "",
            currentValue: "",
            appliedAt: "",
          },
        ],
      },
    ],
  };
  onItemCompleteHandler = (id) => {
    const item = this.state.list.find((el) => el.id === id);
    const updatedItem = { ...item, completed: !item.completed };
    onHistoryChange(updatedItem, "onItemComplete", this.state, this.newDescription);
    this.setState({
      list: this.state.list.map((todoItem) =>
        todoItem.id === id ? updatedItem : todoItem
      ),
    });
  };
  onItemClickHandler = (id) => {
    const item = this.state.list.find((el) => el.id === id);
    const updatedItem = { ...item, clicked: !item.clicked };
    this.setState({
      list: this.state.list.map((todoItem) =>
        todoItem.id === id ? updatedItem : { ...todoItem, clicked: false }
      ),
    });
  };
  countId = 5;
  itemTitle;
  newDescription;
  onTitleChangeHandler = ({ target }) => {
    this.itemTitle = target.value;
  };
  onDescriptionChange = ({ target }) => {
    this.newDescription = target.value;
    console.log("wahaat");
  };
  onFormSubmitHandler = (event) => {
    this.countId++;
    event.preventDefault();
    const newItem = {
      id: this.countId,
      title: this.itemTitle,
      completed: false,
      description: "",
      clicked: false,
      history: [
        {
          id: 1,
          field: "",
          action: "",
          prevValue: "",
          currentValue: "",
          appliedAt: "",
        },
      ],
    };
    onHistoryChange(newItem, "onFormSubmit", this.state, this.newDescription);
    this.setState({ list: [...this.state.list, newItem] });
  };
  onSubmitDescriptionHandler = (event) => {
    event.preventDefault();
    const actualItem = this.state.list.filter((todoItem) => todoItem.clicked);
    onHistoryChange(actualItem[0], "onDescriptionChange", this.state, this.newDescription);
    this.setState(
      this.state.list.map((todoItem) => {
        if (todoItem.clicked) {
          todoItem.description = this.newDescription;
          return todoItem;
        } else {
          return todoItem;
        }
      })
    );
  };
  
  render() {
    return (
      <div className="app">
        <div className="toDoList">
          <h2 className="toDoList__title">Todos</h2>
          <ToDoSearch />
          <ul className="toDoList__items">
            {this.state.list.map((todoItem) => (
              <ToDoItem
                key={todoItem.id}
                item={todoItem}
                onItemComplete={this.onItemCompleteHandler}
                onItemClick={this.onItemClickHandler}
              />
            ))}
          </ul>
          <ToDoFormCreate
            onTitleChange={this.onTitleChangeHandler}
            onSubmit={this.onFormSubmitHandler}
          />
        </div>
        {this.state.list.map((todoItem) =>
          todoItem.clicked ? (
            <ToDoDetails
              item={todoItem}
              key={todoItem.id}
              onDescriptionChange={this.onDescriptionChange}
              onSubmitDescription={this.onSubmitDescriptionHandler}
            />
          ) : null
        )}
      </div>
    );
  }
}
