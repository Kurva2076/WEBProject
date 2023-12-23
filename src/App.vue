<template>
  <TeamBlock />
</template>

<script>
import TeamBlock from "@/components/TeamBlock.vue";

export default {
  name: 'App',
  components: {
    TeamBlock
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
