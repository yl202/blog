<template>
  <div>
    welcome to the world,it's suck,but u're gonna love it.
  </div>
  <login></login>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import login from './components/login';

export default {
  name: 'App',
  components: {
    login:login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
