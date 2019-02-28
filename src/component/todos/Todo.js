import React, {Component} from 'react';
import TodoItem from './TodoItem';
import AddItem from './AddItem';

class Todo extends  Component {

  constructor(){
    super();
    this.state = {
      Todos: [
        {name: 'Task 1', completed: false},
        {name: 'Task 2', completed: false},
        {name: 'Task 3', completed: false}
      ],
      currentValue: ''
    }
    //this.toggleStatus = this.toggleStatus.bind(this)
  }


  toggleStatus = (index) => {
    let Todos = this.state.Todos
    let task = Todos[index]
    task.completed = !task.completed
    this.setState({Todos})
  }

  addItem = (evt) =>{
    evt.preventDefault();
    let Todos = this.state.Todos;
    let currentValue = this.state.currentValue;
    Todos.push({
      name: currentValue,
      completed: false
    })
    this.setState({currentValue: ''})
  }

  updateinputValue = (newValue) =>{
    this.setState({
      currentValue: newValue.target.value
    })
  }

  updateTodoList = (index, value) =>{
    let Todos = this.state.Todos;
    Todos[index].name = value
    this.setState(Todos)
  }
  
  removeItem = (ind) =>{
    let Todos = this.state.Todos
    Todos.splice(ind, 1);
    this.setState({Todos})
  }
  
  render(){
    return(
      <section>
        <AddItem  currentValue = {this.state.currentValue} 
                  updateinputValue ={this.updateinputValue}  
                  addItem={this.addItem} />
        <ul>
          {
            this.state.Todos.map((todo, index) => {
              return <TodoItem key= {todo.name} 
                            index= {index}
                            clickHandler= {this.toggleStatus} 
                            todo={todo}
                            removeItem={this.removeItem}
                            updateTodoList= {this.updateTodoList}
                            />
            })
          }
        </ul>
      </section>
    )  
  }
}

export default Todo;