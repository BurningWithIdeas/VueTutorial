import axios from 'axios';

const state = {
  todos: [],
  toggleAddTaskStatus: false,
};

const getters = {
  allTodos: (state) => state.todos,
  toggleAddTaskStatus: (state) => state.toggleAddTaskStatus,
};

const actions = {
  async fetchTodos({ commit }) {
    const { data } = await axios.get('http://localhost:8081/tasks');

    commit('setTodos', data);
  },
  async addTodo({ dispatch }, task) {
    await axios.post('http://localhost:8081/tasks', task);

    dispatch('fetchTodos');
  },
  async deleteTodo({ dispatch }, id) {
    await axios.delete(`http://localhost:8081/tasks/${id}`);

    dispatch('fetchTodos');
  },
  async toggleTodoReminder({ dispatch, state }, id) {
    const task = state?.todos?.find((todo) => todo.id === id) || {};

    await axios.put(`http://localhost:8081/tasks/${id}`, { ...task, reminder: !task.reminder });

    dispatch('fetchTodos');
  },
  toggleAddTask({ commit, state }) {
    commit('toggleAddTask', !state.toggleAddTaskStatus);
  },
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  toggleAddTask: (state, toggleAddTaskStatus) => {
    state.toggleAddTaskStatus = toggleAddTaskStatus;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
