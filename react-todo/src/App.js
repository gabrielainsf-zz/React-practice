import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'
import TodoItems from './components/TodoItems'

class App extends Component {

  // createRef grabs the input
  inputElement = React.createRef()

  // App needs a constructor because it's a stateful component
  // It has two stateless children: TodoList and TodoItems
  constructor(props) {
    super(props);
    // Set the initial state, each item needs a key
    this.state = {
      items: [],
      currentItem: { text: '', key: '' }
    }
  }

  // When there is changed detected (like typing), onChange in the child TodoList
  // will call handleInput
  handleInput = (e) => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem 
    });
  }

  // Adding currentItem from the current state to the list of items
  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      // Spread operator allows grabbing all of the current items in items
      const items = [...this.state.items, newItem]
      // Set currentItem to empty strings to get it ready for the next item
      this.setState({
        items: items,
        currentItem: { text: '', key: ''}
      })
    }
  }

  // If the item's key does not match the one clicked, it will be returned/
  // not deleted
  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })

    this.setState({
      items: filteredItems,
    })
  }


  render () {
    return (
      <div className="App">
        <TodoList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
        />
      </div>
      )
  }
}


export default App;
