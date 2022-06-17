import { Component } from "react";

export default class ToDoDetails extends Component {
  render() {
    return (
      <div className="todo-details">
        <h1 className="todo-details__title">{this.props.item.title}</h1>
        <form className="todo-details__form" onSubmit={this.props.onSubmitDescription}>
          <input
            className="todo-details__par"
            placeholder={this.props.item.description}
            onChange={this.props.onDescriptionChange}
          ></input>
          <button type="submit" className="todo-details__but-change">CHANGE</button>
        </form>
        <div className="todo-details__history-block">
          <h6 className="todo-details__title">History</h6>
          {this.props.item.history.map((item) => {
            return (
              <div
                className={
                  item.action !== ""
                    ? "todo-details__history history"
                    : "todo-details__history"
                }
                key={item.id}
              >
                <p className="history__action">{item.action}</p>
                <p className="history__data">{item.appliedAt}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
