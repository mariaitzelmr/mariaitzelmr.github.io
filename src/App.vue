<template>
  <div id="app">
    <nav>
      <router-link to="/">{{nombre}}</router-link> |
      <router-link to="/about">Otros intereses...</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #dfbceb;

    &.router-link-exact-active {
      color: #a90cd0;
    }
  }
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'initPage',
  computed: {
    nombre() {
      return this.$store.state.nombre;
    },
  },
};
</script>
