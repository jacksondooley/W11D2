import React from "react";
import TodoDetailView from "./todo_detail_view";

class TodoListItem extends React.Component{
  constructor(props){
    super(props)

    this.state={
      detail: false
    }
    this.handleDetail = this.handleDetail.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleDetail(){
    // Double Check this
    this.setState((state) => {
      return { detail: !state.detail }
    })
  }

  handleDone(){
    const todo = this.props.todo
    this.props.receiveTodo({...todo, done: !todo.done })
  }

  render(){
    const done = this.props.todo.done ? "Undo" : "Done"
    return (
      <div>
        <li onClick={this.handleDetail}>{this.props.todo.title}</li>
        <button onClick={this.handleDone} >{done}</button>
        {this.state.detail ? <TodoDetailView todo={this.props.todo}/> : null}
      </div>
    )
  }
  
}

export default TodoListItem;