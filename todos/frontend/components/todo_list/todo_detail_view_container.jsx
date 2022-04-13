import { connect } from 'react-redux';
import { receiveSteps } from '../../actions/step_actions';
import { removeTodo } from '../../actions/todo_actions';
import TodoDetailView from './todo_detail_view'


const mapDispatchToProps = (dispatch) => {
  return(
    {
      removeTodo: (todo) => dispatch(removeTodo(todo)),
      receiveSteps: (todo) => dispatch(receiveSteps(todo))
    }
  )
}

export default connect(null, mapDispatchToProps)(TodoDetailView);