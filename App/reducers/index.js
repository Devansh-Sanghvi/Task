import { combineReducers } from 'redux';
import TaskBoardReducer from './TaskBoardReducer';

export default combineReducers({
  taskBoard: TaskBoardReducer,

});
