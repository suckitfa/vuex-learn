<template>
  <div id="app">
    <div class="container">
      <AddTodos />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import AddTodos from './components/AddTodos.vue'
import FilterTodos from './components/FilterTodos.vue';
export default {
  name:"app",
  components: {Todos,AddTodos,FilterTodos}
}
</script>

<style>
body {
  font-family: "Franklin Gothic medium","Arial Narrow", Arial, Helvetica, sans-serif;
  line-height: 1.6;
  background-color: #e8f7f0;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: 0 2rem;
}
</style>