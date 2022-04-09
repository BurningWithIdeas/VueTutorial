<template>
  <div @dblclick="onReminder" :class="[task.reminder ? 'reminder' : '', 'task']">
    <div class="description">
      <h3>{{ task.text }}</h3>
      <p>{{ task.date }}</p>
    </div>
    <div @click="onDelete" class="status"><unicon name="check" fill="limegreen"></unicon></div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit('delete-task');
    },
    onReminder(id) {
      this.$emit('remind-task');
    },
  },
};
</script>

<style>
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  background: #e5e9eb;
}

.reminder {
  border-left: 20px solid green;
}

.task:not(:last-child) {
  margin-bottom: 8px;
}

.status {
  cursor: pointer;
}
</style>
