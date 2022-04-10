<template>
  <header>
    <h2>{{ text }}</h2>
    <Button
      @on-click="toggleAddTask"
      :text="toggleAddTaskStatus ? 'Close' : 'Add Task'"
      :background="toggleAddTaskStatus ? 'grey' : 'green'"
    />
  </header>
</template>

<script setup>
import { useActions, useGetters } from '../utils/routerHooks';
import Button from './Button.vue';

defineProps({
  text: String,
});

const { toggleAddTask } = useActions(['toggleAddTask']);
const { toggleAddTaskStatus } = useGetters(['toggleAddTaskStatus']);
</script>

<style scope>
header {
  display: flex;
  justify-content: space-between;
  min-width: 520px;
  margin-bottom: 32px;

  font-weight: bold;
}
</style>
