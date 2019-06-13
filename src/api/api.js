import * as axios from "axios";

const instance = axios.create({
  baseURL: `https://uxcandy.com/~shapoval/test-task-backend/v2/`,
});

export const tasksApi = {
  getTasks(developer, currentPage, sortField, sortDirection) {
    return instance
      .get(
        `?developer=${developer}&page=${currentPage}&sort_field=${sortField}&sort_direction=${sortDirection}`
      )
      .then(response => response.data);
  },
  setTask(developer, form) {
    return instance
      .post(`create/?developer=${developer}`, form)
      .then(response => response.data);
  },

  updateTask(developer, form, id) {
    return instance
      .post(`edit/${id}/?developer=${developer}`, form)
      .then(response => response.data);
  }
};

export const loginApi = {
  login(developer, form) {
    return instance
      .post(`login/?developer=${developer}`, form)
      .then(response => response.data);
  }
};
