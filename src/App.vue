<template>
  <img alt="Vue logo" src="./assets/img/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <FormBlock />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FormBlock from "@/components/FormBlock.vue";

export default {
  name: 'App',
  components: {
    FormBlock,
    HelloWorld
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
}

body {
  margin: 0;
  font-family: "Montserrat", system-ui !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
