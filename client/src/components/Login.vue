<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h4>Login</h4>
          <div>
            <form autocomplete="off">
              <div class="d-none">
                <input type="email">
                <input type="password">
              </div>
              <div class="form-group">
                <input type="email" v-model="user.email" placeholder="Email">
              </div>
              <div class="form-group">
                <input type="password" v-model="user.password" placeholder="Password">
              </div>
              <div class="form-group">
                <button class="btn">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-4">
          <h4>Register</h4>
          <div>
            <form autocomplete="off">
              <div class="d-none">
                <input type="email">
                <input type="password">
              </div>
              <div class="form-group">
                <input type="email" v-model="newUser.email" placeholder="Email" autocomplete="off">
              </div>
              <div class="form-group">
                <input type="password" v-model="newUser.password" placeholder="Password">
              </div>
              <div class="form-group">
                <button class="btn" @click="registerUser()">Register</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-4">
          <pre>{{newUser}}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {API} from '@/services/Api'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login',
      user: {
        email: '',
        password: ''
      },
      newUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerUser: function () {
      let newUser = this.newUser
      API.post('/users/', newUser)
        .then(function (res) {
          console.log(res)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../styles/vars";
  .login {
    padding: 2rem;
  }
</style>
