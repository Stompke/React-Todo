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
    localStorage.setItem('ToDoList', JSON.stringify(this.state.ToDoList))
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
    localStorage.setItem('ToDoList', JSON.stringify(this.state.ToDoList))
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
    localStorage.clear()
    localStorage.setItem('ToDoList', JSON.stringify(this.state.ToDoList))
  }

  filterOutCompleted = () => {
    this.setState({
      ToDoList: this.state.ToDoList.filter(item => item.completed === false)
    })
    localStorage.clear();
    localStorage.setItem('ToDoList', JSON.stringify(this.state.ToDoList))
  }


  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>Git 'R Done</h1>
        <ToDoList toggleCompleted={this.toggleCompleted} itemsList={this.state.ToDoList} />
        <ToDoForm addTask={this.addTask} />
        <button className='removeButton' onClick={this.filterOutCompleted}>Remove Completed</button>
      </div>
    );
  }
}

export default App;
