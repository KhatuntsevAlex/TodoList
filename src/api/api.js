import * as axios from "axios";
import $ from "jquery";

export const getTasks = (developer, currentPage, sortField, sortDirection) =>
  axios
    .get(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/?developer=${developer}&page=${currentPage}&sort_field=${sortField}&sort_direction=${sortDirection}`
    )
    .then(response => response.data);

export const setTask = (developer, form) =>
  axios
    .post(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=${developer}`,
      form
    )
    .then(response => response.data);

    export const login = (developer, form) =>
    axios
    .post(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=${developer}`,
      form
    )
    .then(response => response.data);

    export const setTaskChanges = (developer, form, id) =>
    axios
    .post(
      `https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${id}/?developer=${developer}`,
      form
    )
    .then(response => response.data);
   
   