<template>
  <div>
    <Header text="Some Header" />
    <AddTask v-if="toggleAddTaskStatus" />
    <Tasks />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
    ...mapActions(['fetchTodos']),
  },
  computed: mapGetters(['toggleAddTaskStatus']),
  created() {
    this.fetchTodos();
  },
};
</script>
