import { Component } from "react";

export default class ToDoItem extends Component{
    render(){
        return(
            <li className={this.props.item.clicked ? "item_active" : "item"}>
                <div className="item__check" onClick={() => this.props.onItemComplete(this.props.item.id)}>
                    <div className={this.props.item.completed ? "item-completed" : "item-default"}>✔</div>
                </div>
                <div className="item__text-block" onClick={() => this.props.onItemClick(this.props.item.id)}>
                    <h6 className={this.props.item.completed ? "item__title_completed" : "item__title"}>{this.props.item.title}</h6>
                    <p className={this.props.item.completed ? "item__description_completed" : "item__description"}>{this.props.item.description}</p>
                </div>
            </li>
        )
    }
}