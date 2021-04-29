import { taskTypes } from './task.types';
import { addItem } from './task.utils';

const INITIAL_STATE = {
  taskItems: [],
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case taskTypes.ADD_TASK:
      return {
        ...state,
        taskItems: [...state.taskItems,action.payload]
      };
    default:
      return state;
  }
};

export default taskReducer;
