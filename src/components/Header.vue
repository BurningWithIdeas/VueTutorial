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

<script>
import { mapGetters, mapActions } from 'vuex';
import Button from './Button.vue';

export default {
  name: 'Header',
  props: { text: String },
  components: {
    Button,
  },
  methods: {
    ...mapActions(['toggleAddTask']),
  },
  computed: mapGetters(['toggleAddTaskStatus']),
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
