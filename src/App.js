import React from 'react';
import './App.css';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
import { testNameToKey } from 'jest-snapshot/build/utils';




const todos = [
  {
    task: 'laundry',
    id: 123123123,
    completed: false
  },
  {
    task: 'vaccuum',
    id: 123123,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      ToDoList: todos
    };
  }

  toggleCompleted = id => {
    this.setState({
      ToDoList: this.state.ToDoList.map(item => {
        if(item.id === id){
          return {
            ...item,
            completed: !item.completed
          }
          } else {
            return item
          }
      })
    })
  }


  addTask = item => {
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ToDoList: [...this.state.ToDoList, newTask]
    });
  }


  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Git 'R Done</h2>
        <ToDoList toggleCompleted={this.toggleCompleted} itemsList={this.state.ToDoList} />
        <ToDoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
