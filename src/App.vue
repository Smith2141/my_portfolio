<template>
  <div>
    <div id="app">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="css">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/index.css';
</style>
