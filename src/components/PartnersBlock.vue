<template>
  <section id="our-partners">
    <div class="block-partners-container container-fluid">
      <h2 class="title text-center">С нами работают</h2>

      <div class="service-message">
        <span>
          Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои сайты.
          Мы делаем всё, чтобы наше сотрудничество было долгим.
        </span>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "PartnersBlock"
}

</script>

<style scoped lang="scss">

#our-partners {
  background-color: #FFFFFF;
  color: #050C33;
  margin-top: 60px;
  margin-bottom: 60px;
}

.block-partners-container {
  padding-left: 0;
  padding-right: 0;
}

@font-face {
  font-family: "Montserrat-Bold";
  src: url("../assets/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
}

.title {
  font-family: "Montserrat-Bold", system-ui !important;
  font-size: 24px;
  margin-bottom: 15px;
}

@media (min-width: 768px) {
  .title {
    font-size: 32px;
    margin-bottom: 8px;
  }
}

@media (min-width: 992px) {
  .title {
    font-size: 36px;
  }
}

@media (min-width: 1082px) {
  .title {
    font-size: 42px !important;
  }
}

.service-message {
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
  padding-right: calc(var(--bs-gutter-x) * .5 + 3px);
  padding-left: calc(var(--bs-gutter-x) * .5 + 3px);
  line-height: 22px;
  font-size: calc(16px + 1px / 4);
  font-weight: 700;
  opacity: 0.75;
}

@media (min-width: 601px) {
  .service-message {
    text-align: center;
  }
}

</style>