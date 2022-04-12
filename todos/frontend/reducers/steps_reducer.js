import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from "../actions/step_actions";
import { receiveSteps, receiveStep, removeStep } from "../actions/step_actions";

const initialState = {
 1: { id: 1, title: "keep stepping", body: "Step", todo_id: 2, done: false }, 
 2: { id: 2, title: "keep stepping", body: "Step", todo_id: 2, done: false }
}


const stepsReducer = (state = initialState, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_STEPS: 
      const newState = {}
      action.steps.forEach((step) => {
        newState[step.id] = step
      })
      return newState;
    case RECEIVE_STEP:
      nextState[action.step.id] = action.step
      return nextState;
    case REMOVE_STEP:
      delete nextState[action.step.id]
      return nextState;
    default:
      return state;
  }
}

export default stepsReducer