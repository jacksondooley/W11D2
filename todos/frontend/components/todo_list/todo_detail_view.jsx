import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
    constructor(props) {
      super(props)

      this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
    this.props.removeTodo(this.props.todo);
    console.log("Hello")
    }

    render() {
      return (
        <div>
          <p>{this.props.todo.body}</p>
          <StepListContainer todo_id={this.props.todo.id} />
          <button onClick={this.handleDelete} >delete</button>
        </div>
      )
    }


}

export default TodoDetailView;

// {/* <button onClick={this.handleDelete} >delete</button> */}

