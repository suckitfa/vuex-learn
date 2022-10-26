<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div class="todo"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:"Todos",
  computed: mapGetters(['allTodos'])
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