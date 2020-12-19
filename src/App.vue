<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script lang="js">
  import Layout from "@/views/layout/Layout"

  export default {
    name: 'App',
    components: {
      Layout
    }
  }
</script>

<style lang="scss">
  @import "~@/assets/styles/reset.scss";
  @import "~@/assets/styles/helper.scss";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
