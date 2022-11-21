<template>
  <div>
    <form>
      <input type="text" placeholder="type a text">
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <h3>Lorem ipsum dolor sit amet.</h3>
    </form>
  </div>
</template>

<script>
export default {
  name: "window"
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
}
form {
  box-sizing: border-box;
  border: 1px solid #000000;
  border-radius: 7px;
  padding: 25px;
  margin-top: 15px;
  width: 400px;
}

</style>
