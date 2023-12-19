<template>
  <FormBlock />
</template>

<script>
import FormBlock from "@/components/FormBlock.vue";

export default {
  name: 'App',
  components: {
    FormBlock
  }
}
</script>

<style lang="scss">
  
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
}

* {
  margin: 0;
  font-family: "Montserrat", system-ui !important;
}
  
</style>
