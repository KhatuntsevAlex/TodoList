const SET_TASKS = "SET_TASKS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const ON_SORT = "ON_SORT"
const UPDATE_TASK_TEXT = "UPDATE_TASK_TEXT"
const ON_NEW_TASK_DATA_CHANGE = "ON_NEW_TASK_DATA_CHANGE"

let initialState = {
  developer: "Khatuntsev_Aleksandr",
  tasks: [
     {
      id: 1,
      username: "Test User",
      email: "test_user_1@example.com",
      text: "Hello, world!",
      status: 10
    },
    {
      id: 3,
      username: "Test User 2",
      email: "test_user_2@example.com",
      text: "Hello from user 2!",
      status: 0
    },
    {
      id: 4,
      username: "Test User 3",
      email: "test_user_3@example.com",
      text: "Hello from user 3!",
      status: 0
    },    
  ],
  sort_direction: "asc", // desc
  sort_field: "username",
  row: null,
  total_task_count: 0,
  pageSize: 3,
  page: 1,
  newTaskName: "Alex",
  newTaskEmail: "Alex@alex.com",
  newTaskText: "AlexAlexAlex",
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.tasks };
    case SET_CURRENT_PAGE:
      return { ...state, page: action.page };
    case SET_TOTAL_COUNT:
      return { ...state, total_task_count: action.totalTaskCount };
    case ON_SORT:
      return {
        ...state,
        sort_direction: action.sortType,
        sort_field: action.sortField
      };
    case UPDATE_TASK_TEXT:
      return {
        ...state,
        tasks: state.tasks.map(t => {
          if (t.id === action.taskId) return { ...t, text: action.taskText };
          return t;
        })
      };
    case ON_NEW_TASK_DATA_CHANGE:
      return {
        ...state,
        newTaskName: action.newTaskName,
        newTaskEmail: action.newTaskEmail,
        newTaskText: action.newTaskText,
      };
    default:
      return state;
  }
};

export const setTasksAC = tasks => ({ type: SET_TASKS, tasks });
export const setCurrentPageAC = page => ({
  type: SET_CURRENT_PAGE,
  page
});
export const setTotalTaskCountAC = totalTaskCount => ({
  type: SET_TOTAL_COUNT,
  totalTaskCount
});
export const onSortMeAC = (sortType, sortField) => ({
  type: ON_SORT,
  sortType,
  sortField
});
export const updateTaskTextAC = (taskId, taskText) => ({
  type: UPDATE_TASK_TEXT,
  taskText,
  taskId
});
export const onNewTaskDataChangeAC = (
  newTaskName,
  newTaskEmail,
  newTaskText
) => ({
  type: ON_NEW_TASK_DATA_CHANGE,
  newTaskName,
  newTaskEmail,
  newTaskText,
});

export default tasksReducer;
