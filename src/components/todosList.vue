<template>
  <div>
    <todo v-for="(todo, index) in todos" :key="index" :todo="todo"/>
  </div>
</template>

<script>
import todo from "@/components/Todo";
import {mapState} from 'vuex'
export default {
  name: "todosList",
  components: {
    todo
  },
  computed: {
    ...mapState({
      todos: "todos"
    })
  }
}
</script>

<style scoped>

</style>
