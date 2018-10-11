import React from 'react';
import TodoItems, { Component } from './TodoItems';

class TodoList extends React.Component {
    // componentDidUpdate() is not called on initial render, only when change
    // occurs -- updates the DOM after prop or state changes
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input
                            ref={this.props.inputElement}
                            placeholder="Enter Task"
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        >
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;