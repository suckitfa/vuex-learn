<template>
    <div>
      <h3>Add Todo</h3>
      <div class="add">
        <form @submit="handleSubmit">
          <input type="text" v-model="title" placeholder="add todo...">
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name:"AddTodos",
  data() {
    return {
      title:"",
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    handleSubmit(e) {
      e.preventDefault()
      if (this.title !== '') {
        this.addTodo(this.title)
        this.title = ''
      } else {
        window.alert(`Title can't be empty!`)
      }
    },
  },

}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
  }
  input[type="submit"] {
    flex:2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
  }
</style>