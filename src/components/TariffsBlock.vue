<template>
  <section id="block-tariffs">
    <div class="block-tariffs-container container">
      <h2 class="title text-center">Тарифы</h2>

      <div class="tariffs-block row justify-content-center">
        <div class="starting-tariff tariff-block">
          <div class="tariff-name">
            <h3 class="fs-4">Стартовый</h3>
          </div>

          <div class="conditions-and-advantages">
            <ul class="fs-6">
              <li>Консультации и работы по SEO</li>
              <li>Услуги дизайнера</li>
              <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
              <li>Предоплата от 6 000 рублей в месяц</li>
            </ul>
          </div>

          <div class="connected-button">
            <button type="button">СВЯЖИТЕСЬ С НАМИ!</button>
          </div>
        </div>

        <div class="business-tariff tariff-block">
          <div class="tariff-name">
            <h3 class="fs-4">Бизнес</h3>
          </div>

          <div class="conditions-and-advantages">
            <ul class="fs-6">
              <li>Консультации и работы по SEO</li>
              <li>Услуги дизайнера</li>
              <li>Высокое время реакции - до 2 рабочих дней</li>
              <li>Неиспользованные оплаченные часы не переносятся</li>
              <li>Предоплата от 30 000 рублей в месяц</li>
            </ul>
          </div>

          <div class="connected-button">
            <button type="button">СВЯЖИТЕСЬ С НАМИ!</button>
          </div>
        </div>

        <div class="VIP-tariff tariff-block">
          <div class="tariff-name">
            <h3 class="fs-4">VIP</h3>
          </div>

          <div class="conditions-and-advantages">
            <ul class="fs-6">
              <li>Консультации и работы по SEO</li>
              <li>Услуги дизайнера</li>
              <li>Максимальное время реакции - в день обращения</li>
              <li>Неиспользованные оплаченные часы не переносятся</li>
              <li>Предоплата от 270 000 рублей в месяц</li>
            </ul>
          </div>

          <div class="connected-button">
            <button type="button">СВЯЖИТЕСЬ С НАМИ!</button>
          </div>
        </div>
      </div>

      <div class="individual-tariff text-center">
        <p>
          <span>Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!</span>
        </p>

        <p>
          <a href="../../public/index.html">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "TariffsBlock"
}

</script>

<style scoped lang="scss">

//#block-tariffs {
//  background: #FFFFFF url("../assets/img/simple-background-D.svg") no-repeat right top;
//  //background-size: cover;
//  background-size: 200vw 200vh;
//}
//
//@media (min-width: 768px) {
//  #block-tariffs {
//    background-size: 58%;
//  }
//}

.block-tariffs-container {
  max-width: 428px;
}

.tariffs-block.row {
  width: 100%;
  margin: auto;
}

@font-face {
  font-family: "Montserrat-Bold";
  src: url("../assets/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
}

.title {
  font-family: "Montserrat-Bold", system-ui !important;
}

.tariff-block {
  margin-bottom: 40px;
  border: 2px solid #EEEEEE;
  border-radius: 5px;
}

.tariff-name {
  border-bottom: 2px solid #DDEEDD;
  margin-bottom: 50px;

  & > h3 {
    font-family: "Montserrat-Bold", system-ui !important;
    color: #EE512E;
    margin: 30px 0 30px;
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
    line-height: 20px;
  }
}

.connected-button {
  //max-width: 100%;
  margin: 40px 0 30px;

  & > button {
    width: 100%;
    //bo
  }
}

</style>