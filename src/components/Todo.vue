<template>
  <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
    <form action="#">
      <p>
        <label>
          <input type="checkbox"  @click="toggleTodo(todo)" />
          <span></span>
        </label>
      </p>
    </form>
    <span class="input-field col s6" :class="{completed: todo.completed}">{{ todo.title }}</span>
    <button class="waves-effect waves-light btn " @click="deleteBtn(todo)">Delete</button>
  </div>
  <hr class="container">
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    ...mapActions({
      deleteBtn: "deleteBtn",
      toggleTodo: "toggleTodo"
    })
  }

}
</script>

<style scoped>
.completed {
  color: #26a69a;;
  font-weight: 600;
}

</style>
