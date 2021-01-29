import { createStore } from "vuex";
import { storage } from "../storage/storage";

export default createStore({
  state() {
    return {
      tasks: storage("tasks") || []
    };
  },
  getters: {
    activeTasks(state) {
      return state.tasks.filter(task => task.status === "active");
    }
  },
  mutations: {
    addActiveTask(state, task) {
      state.tasks.push(task);
      storage("tasks", state.tasks);
    },
    changeStatus(state, { id, status }) {
      const idx = state.tasks.findIndex(task => task.id === id);
      state.tasks[idx].status = status;
      storage("tasks", state.tasks);
    }
  }
});
