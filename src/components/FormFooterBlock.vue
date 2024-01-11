<template>

  <div class="block-form-footer-container">
    <FormBlock />

    <FooterBlock />
  </div>

</template>

<script>

import FormBlock from "@/components/FormBlock.vue"
import FooterBlock from "@/components/FooterBlock.vue"

export default {
  components: {
    FormBlock,
    FooterBlock
  },
  name: "FormFooterBlock"
};

</script>

<style scoped lang="scss">

.block-form-footer-container {
  color: #FFFFFF;
  background: linear-gradient(254deg, rgba(256, 256, 256, .276) -110%, rgba(256, 256, 256, 0) 68.75%),
  url(../assets/img/form-footer-block-img/background-img/D.svg) no-repeat bottom right,
  url(../assets/img/form-footer-block-img/background-img/D-flying.svg) no-repeat center top, #040613;
  background-size: auto, 140px, 165px;
}

@media (min-width: 768px) {
  .block-form-footer-container {
    background-size: auto, 230px, 235px;
  }
}

@media (min-width: 992px) {
  .block-form-footer-container {
    background-size: auto;
  }
}

</style>