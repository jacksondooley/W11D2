import React from 'react';
import { uniqueId } from '../../util/util';

class TodoForm extends React.Component {
  constructor(props){
    super(props)

    this.state = { id: uniqueId(), title: "", body: "", done: false}

    this.handleTitle = this.handleTitle.bind(this)
    this.handleBody = this.handleBody.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitle(e) {
    this.setState({ title: e.target.value })
  }

  handleBody(e) {
    this.setState({ body: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.receiveTodo(this.state)
    this.setState({ id: uniqueId(), title: "", body: "", done: false })
  }



  render(){
    return(
      <div>
        <h2>Add Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input type="text" value={this.state.title} onChange={this.handleTitle}/>
          </label>
          <label>Body:
            <input type="text" value={this.state.body} onChange={this.handleBody}/>
          </label>
          <input type="submit" value="Create"/>
        </form>
      </div>
     
    )
  }
}

export default TodoForm;