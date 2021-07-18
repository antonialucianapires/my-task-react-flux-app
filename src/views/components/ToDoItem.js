import React, { Component } from "react";

class ToDoItem extends Component {
  static defaultProps = {
    item: {},
  };

  render() {
    const { props } = (this.item = props.item);
    return (
      <li className="todo-list-item">
        <input
          className="tw-check"
          type="checkbox"
          checked={this.item.isChecked}
        />
        <input
          className="tw-input"
          type="text"
          disabled={this.item.isChecked}
          defaultValue={this.item.description}
        />
        <button className="tw-tbn">X</button>
      </li>
    );
  }
}

export default ToDoItem;
