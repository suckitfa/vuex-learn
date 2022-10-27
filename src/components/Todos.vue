<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Doubble click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    <div class="todos">
      <div 
        :class="{'is-complete':todo.completed,'todo':true}"
        v-for="todo in allTodos"
        v-bind:key="todo.id"
        @dblclick="handleDoubleClick(todo)"
      >
      {{todo.title}}
      <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
    </div>
    </div>
  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:"Todos",
  computed: mapGetters([
    // 映射 this.allTodos 未 store.state.allTodos
    'allTodos'
  ]),
  methods: {
    ...mapActions(['fetchTodos','deleteTodo','updateTodo']),
    handleDoubleClick(todo) {
      const updatedTodo  = {
        ...todo,
        completed: !todo.completed
      }
      this.updateTodo(updatedTodo)
    }
  },
  created() {
    this.fetchTodos()
  }
}
</script>
<style lang="css" scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap:1rem;
}
.todo {
  border:1px solid #ccc;
  background:#41b883;
  padding:1rem;
  border-radius:5px;
  text-align:center;
  position:relative;
  cursor:pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;;
}
.is-complete {
  background: #35495e;
}
@media (max-width:500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>