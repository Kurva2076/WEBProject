<template>
  <PartnersBlock />
</template>

<script>
import PartnersBlock from "@/components/PartnersBlock.vue";

export default {
  name: 'App',
  components: {
    PartnersBlock
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
