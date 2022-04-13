import React from 'react';
import TodoForm from '../todo_list/todo_form';
import TodoListItem from '../todo_list/todo_list_item';

const TodoList = ({ todos, receiveTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, idx) => {
          return <TodoListItem key={idx} todo={todo} />
        })}
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </div>
  )

}

export default TodoList;