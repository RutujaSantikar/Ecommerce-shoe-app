<template>
  <div>
    <AppNavbar />
    <AppHome />
  </div>
</template>

<script>

import AppNavbar from './components/AppNavbar.vue'
import AppHome from './components/AppHome.vue'
export default {
  name: 'App',
  components:{
    AppNavbar,
    AppHome
  }
}
</script>

<style>

</style>
