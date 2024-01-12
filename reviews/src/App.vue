<template>
  <Reviews />
</template>

<script>
import reviews from "@/components/reviews.vue"
import Reviews from "@/components/reviews.vue";

export default {
  name: 'App',
  components: {
    Reviews,
    reviews
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
