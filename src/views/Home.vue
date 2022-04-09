<template>
  <div>
    <Header text="Some Header" @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" />
    <AddTask v-if="showAddTask" @add-task="addTask" />
    <Tasks @delete-task="deleteTask" @remind-task="remindTask" :tasks="tasks" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Tasks,
    AddTask,
    Footer,
  },
  methods: {
    addTask(task) {
      console.log('old', { text: task.text, date: task.date, reminder: task.reminder, id: task.id });
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    remindTask(id) {
      this.tasks = this.tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task));
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    async fetchTasks() {
      const response = await fetch('http://localhost:8081/tasks');

      const tasks = await response.json();

      return tasks;
    },
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
