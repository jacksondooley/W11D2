import React from "react";
import ReactDOM from "react-dom";
import { receiveStep, receiveSteps, removeStep } from "./actions/step_actions";
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions";
import rootReducer from './reducers/root_reducer';
import configureStore from './store/store'
import Root from "./components/root";
import { allTodos } from "./reducers/selectors";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content")

  // Bootstrap?
  window.newTodos = [{ id: 1, title: "you suck", body: "you still suck", done: false }, 
  { id: 1000, title: "yoasdf", body: "sorry", done: false }, 
  { id: 2, title: "thanks", body: "you still suck", done: false }];

  window.newSteps = [{ id: 5, title: "keep stepping", body: "Step", todo_id: 2, done: false }, { id: 70, title: "keep stepping", body: "Step", todo_id: 2, done: false }]

  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.removeTodo = removeTodo;
  window.rootReducer = rootReducer;
  window.receiveSteps = receiveSteps;
  window.receiveStep = receiveStep;
  window.removeStep = removeStep;
  window.store = configureStore()
  window.allTodos = allTodos

  const store = configureStore()


  ReactDOM.render(<Root store={store}/>, content)
})