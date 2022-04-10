<template>
  <div class="tasks">
    <Task
      @delete-task="deleteTodo(task.id)"
      @remind-task="toggleTodoReminder(task.id)"
      :key="task.id"
      v-for="task in allTodos"
      :task="task"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Task from './Task.vue';

export default {
  name: 'Tasks',
  props: {
    tasks: Array,
  },
  components: { Task },
  methods: {
    ...mapActions(['deleteTodo', 'toggleTodoReminder']),
  },
  computed: mapGetters(['allTodos']),
};
</script>
