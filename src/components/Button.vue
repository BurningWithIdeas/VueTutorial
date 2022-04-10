<template>
  <button @click="$emit('on-click')" :style="{ backgroundColor: background }">{{ text }}</button>
</template>

<script setup>
defineProps({
  text: String,
  background: String,
});
</script>

<style scoped>
button {
  padding: 30px;
  color: white;
  font-size: 15px;
}
</style>
