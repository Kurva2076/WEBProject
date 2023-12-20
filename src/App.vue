<template>
  <TariffsBlock />
</template>

<script>
import TariffsBlock from "@/components/TariffsBlock.vue";

export default {
  name: 'App',
  components: {
    TariffsBlock
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
