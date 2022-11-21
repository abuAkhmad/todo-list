<template>
  <div class=" container">
    <div class="input-field">
      <input type="text" v-model="newTodoItem">
      <button class="btn waves-effect waves-light" @click="addNewTodoItem()" :disabled="newTodoItem.length === 0">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoForm",
  data() {
    return {
      newTodoItem: "",
    }
  },
  methods: {
    addNewTodoItem() {
      this.$store.dispatch('addNewTodo', this.newTodoItem);
      this.newTodoItem = ""
    }
  }
}
</script>

<style scoped>
.input-field {
  display: flex;
  align-items: center;
}
</style>
