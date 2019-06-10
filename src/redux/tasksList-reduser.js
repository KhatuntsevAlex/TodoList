import _ from "lodash";
import Api from '../api/api'

const SET_TASKS = "SET_TASKS";
const SET_TOTAL_TASK_COUNT = "SET_TOTAL_TASK_COUNT";
const ADD_TASK = "ADD_TASK";
const ON_SORT = "ON_SORT";
const ON_TASK_EDIT = "ON_TASK_EDIT";
const ON_TASK_DATA_CHANGE = "ON_TASK_DATA_CHANGE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const LOADING_START = "LOADING_START";

let initialState = {
  developer: "Aleksandr___Khatuntsev",
  tasks: [],
  total_task_count: 0,
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

    case LOADING_START:
      return { ...state, isFetching: true };

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
      let { id, bool } = action;
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
          if (task.id === changedTaskid) {
            if (Number(status) === 0) status = 0;
            else status = 10;
            return { ...task, text, status };
          }
          return { ...task };
        })
      };
    default:
      return state;
  }
};
export default tasksReducer;

//Action creators
export const setTasks = tasks => ({ type: SET_TASKS, tasks });
export const setTotalTaskCount = totalTaskCount => ({
  type: SET_TOTAL_TASK_COUNT,
  totalTaskCount
});
export const addTask = newTask => ({ type: ADD_TASK, newTask });
export const loadingStart = () => ({ type: LOADING_START });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const onSort = sortField => ({ type: ON_SORT, sortField });
export const onTaskEdit = (id, bool) => ({ type: ON_TASK_EDIT, id, bool });
export const onTaskDataChange = (text, status, changedTaskid) => ({
  type: ON_TASK_DATA_CHANGE,
  text,
  status,
  changedTaskid
});

//thunk creators
export const getTasks = (developer, currentPage, sortData) => dispatch => {
  let { sortField, sortDirection } = sortData;
  Api.getTasks(developer, currentPage, sortField, sortDirection).then(data => {
    if (data.status === "ok") dispatch(setTasks(data.message.tasks));
    dispatch(setTotalTaskCount(data.message.total_task_count));
    dispatch(setCurrentPage(currentPage));
  });
};
export const setTaskChanges = (developer, form, id) => dispatch => {
  Api.setTaskChanges(developer, form, id).then(data => {
    if (data.status === "ok") dispatch(onTaskEdit(id, false));
  });
};


