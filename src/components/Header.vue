<template>
  <header>
    <h2>{{ text }}</h2>
    <Button
      @on-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :background="showAddTask ? 'grey' : 'green'"
    />
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  props: { text: String, showAddTask: Boolean },
  components: {
    Button,
  },
};
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
