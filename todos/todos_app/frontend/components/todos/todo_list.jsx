import React from 'react';
import { fetchTodos } from '../../actions/todo_actions';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

class TodoList extends React.Component{
  constructor(props){
    super(props)
  }

  // componentDidMount(){
  //   this.props.fetchTodos()
  // }
  render(){
    const { todos, receiveTodo, removeTodo } = this.props
    return (
      <div>
        <ul>
          {todos.map((todo, idx) => {
            return <TodoListItem key={idx} 
            todo={todo} 
            removeTodo={removeTodo} 
            receiveTodo={receiveTodo} />
          })}
        </ul>
        <TodoForm receiveTodo={receiveTodo} />
      </div>
      )
  }
}

export default TodoList;

// const TodoList = ({ todos, receiveTodo, removeTodo, fetchTodos}) => {
//   return (
//     <div>
//       <ul>
//         {todos.map((todo, idx) => {
//           return <TodoListItem key={idx} todo={todo} fetchTodos={fetchTodos} removeTodo={removeTodo} receiveTodo={receiveTodo}/>
//         })}
//       </ul>
//       <TodoForm receiveTodo={receiveTodo}/>
//     </div>
//   )

// }

// export default TodoList;