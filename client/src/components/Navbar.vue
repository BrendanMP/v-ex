<template>
  <div class="navbar">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      msg: 'Navbar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../styles/vars";
  .navbar {
    position: fixed;
    top: 0;
    left: 5rem;
    transform: rotate(90deg);
    transform-origin: top left;
    padding: 2rem;
  }
</style>
