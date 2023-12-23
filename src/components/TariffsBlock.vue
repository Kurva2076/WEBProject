<template>
  <section id="block-tariffs">
    <div class="block-tariffs-container container">
      <h2 class="title text-center fs-2">Тарифы</h2>

      <div class="tariffs-block row" tabindex="1">
        <div class="col-12 col-md-4">
          <div class="starting-tariff tariff-block">
            <div class="tariff-name">
              <h3 class="fs-5">Стартовый</h3>
            </div>

            <div class="conditions-and-advantages">
              <ul class="fs-6">
                <li><span>Консультации и работы по SEO</span></li>
                <li><span>Услуги дизайнера</span></li>
                <li><span>Неиспользованные оплаченные часы переносятся на следующий месяц</span></li>
                <li><span>Предоплата от 6 000 рублей в месяц</span></li>
              </ul>
            </div>

            <div class="connected-button">
              <button type="button">СВЯЖИТЕСЬ С НАМИ!</button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="business-tariff tariff-block">
            <div class="tariff-name">
              <h3 class="fs-5">Бизнес</h3>
            </div>

            <div class="conditions-and-advantages">
              <ul class="fs-6">
                <li><span>Консультации и работы по SEO</span></li>
                <li><span>Услуги дизайнера</span></li>
                <li><span>Высокое время реакции - до 2 рабочих дней</span></li>
                <li><span>Неиспользованные оплаченные часы не переносятся</span></li>
                <li><span>Предоплата от 30 000 рублей в месяц</span></li>
              </ul>
            </div>

            <div class="connected-button">
              <button type="button">СВЯЖИТЕСЬ С НАМИ!</button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4">
          <div class="VIP-tariff tariff-block">
            <div class="tariff-name">
              <h3 class="fs-5">VIP</h3>
            </div>

            <div class="conditions-and-advantages">
              <ul class="fs-6">
                <li><span>Консультации и работы по SEO</span></li>
                <li><span>Услуги дизайнера</span></li>
                <li><span>Максимальное время реакции - в день обращения</span></li>
                <li><span>Неиспользованные оплаченные часы не переносятся</span></li>
                <li><span>Предоплата от 270 000 рублей в месяц</span></li>
              </ul>
            </div>

            <div class="connected-button">
              <button type="button">СВЯЖИТЕСЬ С НАМИ!</button>
            </div>
          </div>
        </div>
      </div>

      <div class="individual-tariff-block text-center">
        <div class="service-suggestion fw-bold">
          <p>
            <span>Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!</span>
          </p>
        </div>

        <div class="create-individual-tariff">
          <p class="fw-bold">
            <a href="../../public/index.html">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

const win = window;
const doc = document;

win.addEventListener("DOMContentLoaded", function () {
  const tariffsBlock = doc.getElementsByClassName("tariffs-block")[0];
  const businessTariff = doc.querySelector(".business-tariff");
  businessTariff.classList.add("hover");
  tariffsBlock.addEventListener("focus", function () {
    businessTariff.classList.remove("hover");
  });
  tariffsBlock.addEventListener("blur", function () {
    businessTariff.classList.add("hover");
  });
  tariffsBlock.addEventListener("mouseover", function () {
    businessTariff.classList.remove("hover");
  });
  tariffsBlock.addEventListener("mouseout", function () {
    businessTariff.classList.add("hover");
  });
});

export default {
  name: "TariffsBlock"
}

</script>

<style scoped lang="scss">

#block-tariffs {
  background: #FFFFFF url("../assets/img/simple-background-D.svg") no-repeat right top;
  background-size: cover;
}

@media (min-width: 768px) {
  #block-tariffs {
    background-size: 58%;
  }
}

.block-tariffs-container {
  padding-top: 107px;
  padding-bottom: 30px;
  max-width: 100%;
}

@media (min-width: 768px) {
  .block-tariffs-container {
    padding-top: 160px;
    padding-bottom: 90px;
  }
}

@media (min-width: 992px) {
  .block-tariffs-container {
    padding-right: 10px;
    padding-left: 10px;
  }
}

.tariffs-block.row {
  justify-content: center;
  width: 100%;
  margin: auto;

  &:focus {
    outline: none;
  }

  & > .col-12 {
    padding: 0;
  }
}

@media (min-width: 768px) {
  .tariffs-block.row {
    max-width: 744px;
  }
}

@media (min-width: 992px) {
  .tariffs-block.row {
    max-width: 972px;
    justify-content: space-between;
  }
}

@media (min-width: 1200px) {
  .tariffs-block.row {
    max-width: 1180px;
  }
}

@font-face {
  font-family: "Montserrat-Bold";
  src: url("../assets/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
}

.title {
  font-family: "Montserrat-Bold", system-ui !important;
  margin-bottom: 15px;
}

@media (min-width: 768px) {
  .title {
    font-size: 32px !important;
    margin-bottom: 63px;
  }
}

@media (min-width: 992px) {
  .title {
    font-size: 36px !important;
    margin-bottom: 60px;
  }
}

@media (min-width: 1200px) {
  .title {
    font-size: 40px !important;
    margin-bottom: 65px;
  }
}

.tariff-block {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding-right: 12px;
  padding-left: 12px;
  max-width: 404px;
  border: calc(1px + 1px / 2) solid #EEEEEE;
  border-radius: 5px;
  background-color: #FFFFFF;
  transition: box-shadow 500ms;
}

@media (min-width: 768px) {
  .tariff-block {
    width: 220px;
    padding-right: 20px;
    padding-left: 20px;
    transition: scale 500ms, box-shadow 500ms;
  }
}

@media (min-width: 992px) {
  .tariff-block {
    width: 292px;
  }
}

@media (min-width: 1200px) {
  .tariff-block {
    width: 358px;
    padding-right: 30px;
    padding-left: 30px;
  }
}

.tariff-block:hover,
.business-tariff.hover {
  box-shadow: 0 4px 50px rgba(162, 162, 162, .25);

  & > .connected-button > button {
    color: #FFFFFF;
    background-color: #F14D34;
  }
}

@media (min-width: 768px) {
  .tariff-block:hover,
  .business-tariff.hover {
    scale: 110%;
  }
}

.tariff-name {
  border-bottom: 2px solid #DDEEDD;
  margin-bottom: 50px;

  & > h3 {
    margin: 30px 0 30px;
    color: #EE512E;
    font-family: "Montserrat-Bold", system-ui !important;
  }
}

@media (min-width: 768px) {
  .tariff-name > h3 {
    margin: 70px 0 25px;
  }
}

.conditions-and-advantages > ul {
  padding-left: 15px;

  & > li::marker {
    content: url("../assets/img/list-check-mark-icon.svg");
  }

  & > li {
    padding-left: 15px;
    margin-top: 17px;
    line-height: 18px;

    & > span {
      font-weight: 600;
      color: #050C33;
      font-size: 14px;
      opacity: 0.7;
    }
  }
}

@media (min-width: 992px) {
  .conditions-and-advantages > ul > li {
    line-height: 20px;

    & > span {
      font-size: 16px !important;
    }
  }
}

.connected-button {
  margin: 38px 0 28px;

  & > button {
    width: 100%;
    height: 56px;
    color: #F14D34;
    background-color: transparent;
    border: 1px solid #F14D34;
    border-radius: 5px;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    transition: color 500ms, background-color 500ms;
  }
}

@media (min-width: 768px) {
  .connected-button {
    margin: 24px 0 35px;
  }
}

@media (min-width: 992px) {
  .connected-button {
    margin: 41px 0 58px;
  }
}

button:focus {
  outline: none;
}

.individual-tariff-block {
  max-width: 404px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .individual-tariff-block {
    margin-top: 72px;
    max-width: 500px;
  }
}

.service-suggestion > p > span {
  color: rgba(19, 32, 102, 0.4);
}

@media (min-width: 768px) {
  .create-individual-tariff {
    margin-top: 19px;
  }
}

.create-individual-tariff > p > a {
  color: #050C33;
  font-size: 12px;
  transition: color 500ms;

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: #EE512E;
  }
}

</style>