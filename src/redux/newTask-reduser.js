const ON_NEW_TASK_DATA_CHANGE = 'ON_NEW_TASK_DATA_CHANGE'

let initialState = {
  newTaskName: '',
  newTaskEmail: '',
  newTaskText: '',
  status: '',
};

const NewTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_NEW_TASK_DATA_CHANGE:
      let {newTaskName, newTaskEmail, newTaskText} = action
      return {
        ...state,
        newTaskName,
        newTaskEmail,
        newTaskText
      };   
    default:
      return state;
  }
};

export const onNewTaskDataChange = (
  newTaskName,
  newTaskEmail,
  newTaskText
) => ({
  type: ON_NEW_TASK_DATA_CHANGE,
  newTaskName,
  newTaskEmail,
  newTaskText
});

export default NewTaskReducer;
