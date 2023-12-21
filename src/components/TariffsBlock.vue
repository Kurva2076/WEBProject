<template>
  <section id="block-tariffs">
    <div class="block-tariffs-container container">
      <h2 class="title text-center fs-2">Тарифы</h2>

      <div class="tariffs-block row justify-content-center" tabindex="1">
        <div class="starting-tariff tariff-block col-12">
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

        <div class="business-tariff tariff-block col-12">
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

        <div class="VIP-tariff tariff-block col-12">
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
  padding: 107px 0 30px;
  max-width: 100%;
}

.tariffs-block.row {
  width: 100%;
  margin: auto;
  padding-left: 12px;
  padding-right: 12px;

  &:focus {
    outline: none;
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

.tariff-block {
  max-width: 404px;
  margin-bottom: 30px;
  border: calc(1px + 1px / 2) solid #EEEEEE;
  border-radius: 5px;
  background-color: #FFFFFF;
  transition: box-shadow 300ms;
}

.tariff-block:hover,
.business-tariff.hover {
  box-shadow: 0 4px 50px rgba(162, 162, 162, .25);

  & > .connected-button > button {
    color: #FFFFFF;
    background-color: #F14D34;
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
    transition: color 700ms, background-color 700ms;
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

.service-suggestion > p > span {
  color: rgba(19, 32, 102, 0.4);
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