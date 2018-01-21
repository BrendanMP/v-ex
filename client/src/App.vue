<template>
  <div id="app">
    <Navbar></Navbar>
    <Login></Login>
    <router-view/>
    <div class="container">
      <pre>{{ content }}</pre>
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import {API} from '@/services/Api'
import Navbar from '@/components/Navbar.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'App',
  components: {
    'Navbar': Navbar,
    'Login': Login
  },
  data () {
    return {
      msg: '',
      content: {},
      user: {}
    }
  },
  mounted () {
    const vm = this
    API.get('/')
      .then(function (res) {
        vm.content = res.data
      })
      .catch(function (error) {
        console.log(error)
      })
    API.get('/users')
      .then(function (res) {
        vm.user = res.data
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
