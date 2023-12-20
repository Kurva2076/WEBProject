<template>
  <section id="block-tariffs">
    <div class="block-tariffs-container container">
      <h2 class="title">Тарифы</h2>

      <div class="tariffs-block row">
        <div class="starting-tariff tariff-block">
          <h3 class="tariff-name">Стартовый</h3>

          <div class="conditions-and-advantages">
            <ul>
              <li>Консультации и работы по SEO</li>
              <li>Услуги дизайнера</li>
              <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
              <li>Предоплата от 6 000 рублей в месяц</li>
            </ul>
          </div>

          <div class="connected-button">
            <button>СВЯЖИТЕСЬ С НАМИ!</button>
          </div>
        </div>

        <div class="business-tariff tariff-block">
          <h3 class="tariff-name">Бизнес</h3>

          <div class="conditions-and-advantages">
            <ul>
              <li>Консультации и работы по SEO</li>
              <li>Услуги дизайнера</li>
              <li>Высокое время реакции - до 2 рабочих дней</li>
              <li>Неиспользованные оплаченные часы не переносятся</li>
              <li>Предоплата от 30 000 рублей в месяц</li>
            </ul>
          </div>

          <div class="connected-button">
            <button>СВЯЖИТЕСЬ С НАМИ!</button>
          </div>
        </div>

        <div class="VIP-tariff tariff-block">
          <h3 class="tariff-name">VIP</h3>

          <div class="conditions-and-advantages">
            <ul>
              <li>Консультации и работы по SEO</li>
              <li>Услуги дизайнера</li>
              <li>Максимальное время реакции - в день обращения</li>
              <li>Неиспользованные оплаченные часы не переносятся</li>
              <li>Предоплата от 270 000 рублей в месяц</li>
            </ul>
          </div>

          <div class="connected-button">
            <button>СВЯЖИТЕСЬ С НАМИ!</button>
          </div>
        </div>
      </div>

      <div class="individual-tariff">
        <p>
          <span>Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!</span>
        </p>

        <p>
          <span>ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</span>
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

//.block-tariffs-container {
//  max-width: 536px;
//}

</style>