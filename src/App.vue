<template>
  <div id="header" class="container">
    <div class="nav-wrapper teal lighten-1 z-depth-1">
      <div class="row">
        <div class="col s12">
            <h4 class="brand-logo center">Todos</h4>
        </div>
      </div>
    </div>
  </div>
  <ul class="tabs z-depth-1">
    <li class="tab active">Completed: {{ completedTodos }} </li>
    <li class="tab">Pending: {{ pendingTodos }} </li>
  </ul>
  <todo-form/>
  <todos-list/>


</template>

<script>
import todosList from "@/components/todosList";
import todoForm from "@/components/todoForm";
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    todosList,
    todoForm
  },
  computed: {
    ...mapGetters(["completedTodos", "pendingTodos"])

  }
}
</script>

<style>
@import "~materialize-css/dist/css/materialize.min.css";
body {
  background: aliceblue;
}
#header {
  top: 0;
  position: sticky;
  position: -webkit-sticky;
  z-index: 10;
}
.container {
  max-width: 600px;
}
.tabs {
  display: flex;
  justify-content: space-around;
  max-width: 600px;
  background: aliceblue;
}
.nav-wrapper {
  margin-top: 150px;
  margin-bottom: 50px;
  color: white;
}
.tab {
  font-size: 20px;
  font-weight: 500;
  color: #26a69a;
}
</style>
