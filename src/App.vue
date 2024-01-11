<template>
  <FAQ />
</template>

<script>
import FAQ from "@/components/FAQ.vue"

export default {
  name: 'App',
  components: {
    FAQ
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat-Regular";
  src: url("./assets/fonts/Montserrat/Montserrat-Regular.ttf") format("truetype");
}

* {
  margin: 0;
  font-family: "Montserrat-Regular", system-ui !important;
}
</style>
