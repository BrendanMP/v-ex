<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'
import {API} from '@/services/Api'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    'Navbar': Navbar
  },
  mounted () {
    API.get('/')
      .then(function (res) {
        console.log(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style lang="scss">
  @import 'styles/base';
</style>
