import _ from "lodash";

const SET_TASKS = "SET_TASKS";
const SET_TOTAL_TASK_COUNT = "SET_TOTAL_TASK_COUNT";
const ADD_TASK = "ADD_TASK";
const ON_SORT = "ON_SORT";
const ON_TASK_EDIT = "ON_TASK_EDIT";
const ON_TASK_DATA_CHANGE = "ON_TASK_DATA_CHANGE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
  developer: "Aleksandr_Khatuntsev",
  tasks: [
    {
      id: 1,
      username: "Test User",
      email: "test_user_1@example.com",
      text: "Hello, world!",
      status: 10
    },
    {
      id: 2,
      username: "Test User 2",
      email: "test_user_2@example.com",
      text: "Hello from user 2!",
      status: 0
    },
    {
      id: 3,
      username: "Test User 3",
      email: "test_user_3@example.com",
      text: "Hello from user 3!",
      status: 10
    },
    {
      id: 4,
      username: "Test User 4",
      email: "test_user_4@example.com",
      text: "Hello from user 4!",
      status: 0
    },
    {
      id: 5,
      username: "Test User 5",
      email: "test_user_5@example.com",
      text: "Hello from user 5!",
      status: 10
    }
  ],
  total_task_count: "",
  pageSize: 3,
  currentPage: 1,
  isFetching: true,
  sortData: {
    sortField: "id",
    sortDirection: "asc" // desc
  }
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return { ...state, tasks: action.tasks, isFetching: false };

    case SET_TOTAL_TASK_COUNT:
      return { ...state, total_task_count: action.totalTaskCount };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case ADD_TASK:
      let totalTaskCount = Number(state.total_task_count) + 1;
      return {
        ...state,
        tasks: [...state.tasks, action.newTask],
        total_task_count: totalTaskCount
      };

    case ON_SORT:
      let sortDirection =
        state.sortData.sortDirection === "asc" ? "desc" : "asc";
      let orderedTasks = _.orderBy(
        state.tasks,
        action.sortField,
        sortDirection
      );
      return {
        ...state,
        tasks: orderedTasks,
        sortData: {
          sortDirection,
          sortField: action.sortField
        }
      };

    case ON_TASK_EDIT:
      let {id, bool} = action
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === id)
            return {
              ...task,
              isTaskEditing: bool
            };
          return { ...task };
        })
      };

    case ON_TASK_DATA_CHANGE:
      let { text, status, changedTaskid } = action;
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (task.id === changedTaskid) return { ...task, text, status };
            return { ...task };
          })
        };
    default:
      return state;
  }
};

export default tasksReducer;

export const setTasks = tasks => ({ type: SET_TASKS, tasks });
export const setTotalTaskCount = totalTaskCount => ({
  type: SET_TOTAL_TASK_COUNT,
  totalTaskCount
});
export const addTask = newTask => ({ type: ADD_TASK, newTask });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const onSort = sortField => ({ type: ON_SORT, sortField });
export const onTaskEdit = (id, bool) => ({ type: ON_TASK_EDIT, id, bool });
export const onTaskDataChange = (text, status, changedTaskid) => ({
  type: ON_TASK_DATA_CHANGE,
  text,
  status,
  changedTaskid
});
