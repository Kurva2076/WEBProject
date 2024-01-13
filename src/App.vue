<template>
  <FormFooterBlock />
</template>

<script>
import FormFooterBlock from "@/components/FormFooterBlock.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: 'App',
  components: {
    FormFooterBlock
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
