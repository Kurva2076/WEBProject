<template>
  <section id="block-team-container">
    <div class="team-block-container container-fluid">
      <h2 class="title text-center fs-3">Команда</h2>

      <div class="team-block row justify-content-around">
        <div class="col-6 col-lg-4">
          <div class="employee-block">
          <div class="employee-image">
            <img src="../assets/img/Sergey-Sinitsa.webp" alt="Path to image of Sergey Sinitsa" />
          </div>

          <div class="employee-name">
            <span>Сергей Синица</span>
          </div>

          <div class="employee-position">
            <span>Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора</span>
          </div>
          </div>
        </div>

        <div class="col-6 col-lg-4">
          <div class="employee-block">
          <div class="employee-image">
            <img src="../assets/img/Roman-Agabekov.webp" alt="Path to image of Roman Agabekov" />
          </div>

          <div class="employee-name">
            <span>Роман Агабеков</span>
          </div>

          <div class="employee-position">
            <span>Руководитель отдела DevOPS, директор</span>
          </div>
          </div>
        </div>

        <div class="col-6 col-lg-4">
          <div class="employee-block">
          <div class="employee-image">
            <img src="../assets/img/Alexey-Sinitsa.webp" alt="Path to image of Alexey Sinitsa" />
          </div>

          <div class="employee-name">
            <span>Алексей Синица</span>
          </div>

          <div class="employee-position">
            <span>Руководитель отдела поддержки сайтов</span>
          </div>
          </div>
        </div>

        <div class="col-6 col-lg-4">
          <div class="employee-block">
          <div class="employee-image">
            <img src="../assets/img/Daria-Bochkareva.webp" alt="Path to image of Daria Bochkareva" />
          </div>

          <div class="employee-name">
            <span>Дарья Бочкарёва</span>
          </div>

          <div class="employee-position">
            <span>Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов</span>
          </div>
          </div>
        </div>

        <div class="col-6 col-lg-4">
          <div class="employee-block">
          <div class="employee-image">
            <img src="../assets/img/Irina-Torkunova.webp" alt="Path to image of Irina Torkunova" />
          </div>

          <div class="employee-name">
            <span>Ирина Торкунова</span>
          </div>

          <div class="employee-position">
            <span>Менеджер по работе с клиентами</span>
          </div>
          </div>
        </div>

<!--        добавить пустой блок, чтобы последний блок с работником нормальной отступал-->
        
      </div>

      <div class="row justify-content-center">
        <div class="team-button col-6">
          <button type="button">
            <span>ВСЯ КОМАНДА</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

const win = window;
const doc = document;

win.addEventListener("DOMContentLoaded", function () {
  const teamButton = doc.getElementsByClassName("team-button")[0];
  teamButton.addEventListener("click", function () {
    win.location.replace("../../public/index.html");
  });
  teamButton.addEventListener("touchstart", function () {
    win.location.replace("../../public/index.html");
  });
})

export default {
  name: "TariffsBlock"
}

</script>

<style scoped lang="scss">

#block-team-container {
  background-color: #FFFFFF;
  color: #050C33;
  padding-top: 50px;
  padding-bottom: 40px;
}

.team-block-container {
  padding-left: calc(var(--bs-gutter-x) * .5 + 3px);
  padding-right: calc(var(--bs-gutter-x) * .5 + 3px);
}

@font-face {
  font-family: "Montserrat-Bold";
  src: url("../assets/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
}

.title {
  font-family: "Montserrat-Bold", system-ui !important;
  margin-bottom: 20px;
}

.team-block {
  margin-left: auto;
  margin-right: auto;
}

.col-6.col-lg-4 {
  padding-left: calc(var(--bs-gutter-x) * .5 + 3px);
  padding-right: calc(var(--bs-gutter-x) * .5 + 3px);
  margin-bottom: 20px;
  max-width: 310px;

  & > .employee-block {
    padding: 0;
    margin-left: auto;
    margin-right: auto;
  }
}

//.employee-block {
//  padding-left: calc(var(--bs-gutter-x) * .5 + 3px);
//  padding-right: calc(var(--bs-gutter-x) * .5 + 3px);
//  margin-bottom: 20px;
//  max-width: 310px;
//}

//.employee-block-5 {
//  margin-left: 0;
//  margin-right: auto;
//}

@media (min-width: 601px) {
  .employee-block {
    margin-bottom: 70px;
  }
}

@media (min-width: 768px) {
  .employee-block {

  }
}

.employee-image > img {
  height: 100%;
  max-height: 280px;
  width: 100%;
  max-width: 280px;
}

.employee-name {
  margin-top: 12px;
  margin-bottom: 6px;

  & > span {
    font-family: "Montserrat-Bold", system-ui !important;
  }
}

@media (min-width: 601px) {
  .employee-name {
    margin-top: 25px;
  }
}

.employee-position {
  line-height: 16px;

  & > span {
    font-size: calc(12px + 1px / 2);
    font-weight: 700;
    opacity: 0.75;
  }
}

@media (min-width: 601px) {
  .employee-position {
    line-height: 22px;

    & > span {
      font-size: calc(16px + 1px / 4);
      font-weight: 600;
    }
  }
}

.team-button {
  width: max-content;
}

.team-button button {
  padding: 4px 30px;
  background-color: #FFFFFF;
  color: #050C33;
  border: 1px solid #CCCDD5;
  border-radius: 5px;

  & > span {
    font-weight: 700;
    font-size: 12px;
  }
}

</style>