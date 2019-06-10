import Api from '../api/api'

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

export default NewTaskReducer;

//Action creators
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

//Thunk creators
export const setTask = (developer, form) => dispatch => {
  Api.setTask(developer, form).then(dispatch(onNewTaskDataChange('','','')))
}



