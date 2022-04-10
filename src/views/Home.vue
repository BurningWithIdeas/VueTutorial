<template>
  <div>
    <Header text="Some Header" />
    <AddTask v-if="toggleAddTaskStatus" />
    <Tasks />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useActions, useGetters } from 'Utils/routerHooks';
import Header from '../components/Header.vue';
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';
import Footer from '../components/Footer.vue';

const { toggleAddTaskStatus } = useGetters(['toggleAddTaskStatus']);
const { fetchTodos } = useActions(['fetchTodos']);

onMounted(() => {
  fetchTodos();
});
</script>
