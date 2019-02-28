import React from 'react';
//import {Form, FormControl} from 'react-bootstrap'

class TodoItem  extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      isEditing: false
    }
  }

  itemForm = ()=> {
    return(
      <form  onSubmit={this.updateItem}>
        <input ref={(val) => this.input = val} type="text" defaultValue={this.props.todo.name} />
        <button type="submit">Update Item</button>
      </form> 
    )
  }

  renderItem = () =>{
    return(
      <li className = {this.props.todo.completed ? 'completed' : ''} 
          onClick= {() => {this.props.clickHandler(this.props.index)}}> 
          {this.props.todo.name}
          <button onClick={(evt)=>{
            evt.stopPropagation();
            this.props.removeItem(this.props.index)
            }}>Delete
          </button>
          <button onClick={(evt)=>{
            evt.stopPropagation()
            this.editItem()
            }}>Edit
          </button>
      </li>
    )
  }

  editItem = () =>{
    const {isEditing} = this.state
    this.setState({
      isEditing: !isEditing
    });
  }

  updateItem = (event)=> {
    event.preventDefault();
    this.props.updateTodoList(this.props.index, this.input.value)
  }
  
  render(){
    const {isEditing} = this.state;
    return(
      <section>
        {
          isEditing ? this.itemForm() : this.renderItem()
        }
      </section>
    )
  }

}

export default TodoItem;