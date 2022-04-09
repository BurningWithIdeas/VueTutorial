<template>
  <div class="tasks">
    <Task
      @delete-task="$emit('delete-task', task.id)"
      @remind-task="$emit('remind-task', task.id)"
      :key="task.id"
      v-for="task in tasks"
      :task="task"
    />
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  name: 'Tasks',
  props: {
    tasks: Array,
  },
  components: { Task },
};
</script>
