<template>

  <div class="block-form-container container">
    <div id="requestForSupport" class="block-form row justify-content-center">
      <div class="requestMessage col-xs-12 col-md-6 row">
        <FormTextElement />
      </div>

      <div class="requestForm col-xs-12 col-md-6 row">
        <FormElement />
      </div>
    </div>
  </div>

</template>

<script>

import FormElement from "@/components/FormElement.vue";
import FormTextElement from "@/components/FormTextElement.vue";

export default {
  components: {
    FormElement,
    FormTextElement
  },
  name: "FormBlock"
}

</script>

<style scoped lang="scss">

.block-form-container.container {
  padding-right: 0;
  padding-left: 0;
}

@media (min-width: 992px) {
  .block-form-container.container {
    max-width: 1000px;
  }
}

@media (min-width: 1200px) {
  .block-form-container.container {
    max-width: 1320px;
  }
}

.block-form-container {
  min-height: 547px;
  padding-top: 20px;
}

@media (min-width: 768px) {
  .block-form-container {
    padding-top: 28px;
  }
}

.block-form.row {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.requestForm.row,
.requestMessage.row {
  min-width: 150px;
  max-width: 510px;
  padding-left: 3px;
  padding-right: 3px;
}

.requestForm {
  padding-bottom: 76px;
}

@media (min-width: 768px) {
  .requestForm.row,
  .requestMessage.row {
    min-width: 384px;
    max-width: 384px;
  }

  .requestForm.row {
    padding-left: 15px;
    padding-right: 0;
    justify-content: end;
  }

  .requestMessage.row {
    padding-left: 0;
    padding-right: 15px;
    justify-content: start;
  }
}

@media (min-width: 992px) {
  .requestForm.row,
  .requestMessage.row {
    min-width: 495px;
    max-width: 505px;
  }
}

@media (min-width: 1200px) {
  .requestForm.row,
  .requestMessage.row {
    min-width: 605px;
    max-width: 605px;
  }

  .requestForm.row {
    padding-right: 10px;
  }

  .requestMessage.row {
    padding-left: 10px;
  }
}

</style>