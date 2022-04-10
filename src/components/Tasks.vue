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

<script setup>
import { useActions, useGetters } from '../utils/routerHooks';
import Task from './Task.vue';

const { deleteTodo, toggleTodoReminder } = useActions(['deleteTodo', 'toggleTodoReminder']);
const { allTodos } = useGetters(['allTodos']);
</script>
