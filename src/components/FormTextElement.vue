<template>

  <div id="messageInfo" class="col">
    <div class="subtitle">
      <h2 class="fw-bold">Оставить заявку на<br />поддержку сайта</h2>
    </div>

    <div class="bodyText">
      <p>
        <span>
          Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий
          подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с
          вами свяжется!
        </span>
      </p>
    </div>

    <div class="contactInformation fw-bolder">
      <ul>
        <li class="servicePhone">
          <a class="linkPhone fs-3 fw-bold" href="tel:88002222673">8 800 222-26-73</a>
        </li>
        <li class="serviceEMail">
          <a class="linkEMail fs-6 fw-bold" href="mailto:info@drupal-coder.ru">info@drupal-coder.ru</a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>

export default {
  name: "FormTextElement"
}

</script>

<style scoped lang="scss">

.requestMessage.row {
  min-width: 150px;
  max-width: 510px;
  padding-left: 3px;
  padding-right: 3px;
}

@media (min-width: 768px) {
  .requestMessage.row {
    min-width: 384px;
    max-width: 384px;
    padding-left: 0;
    padding-right: 15px;
    justify-content: start;
  }
}

@media (min-width: 992px) {
  .requestMessage.row {
    min-width: 495px;
    max-width: 505px;
  }
}

@media (min-width: 1200px) {
  .requestMessage.row {
    min-width: 605px;
    max-width: 605px;
    padding-left: 10px;
  }
}

#messageInfo {
  max-width: 504px;
}

.subtitle {
  padding-top: 15px;
  padding-bottom: 12px;
  text-align: center;

  & > h2 {
    font-size: 22px;
    line-height: 27px;
  }
}

@media (min-width: 601px) {
  .subtitle > h2 {
    font-size: 25px;
  }
}

@media (min-width: 768px) {
  .subtitle {
    padding-top: 5px;

    & > h2 {
      font-size: 34px;
      line-height: 40px;
    }
  }
}

@media (min-width: 992px) {
  .subtitle {
    padding-top: 10px;

    & > h2 {
      font-size: 42px;
      line-height: 51px;
    }
  }
}

.bodyText,
.contactInformation {
  text-align: justify;
}

.bodyText {
  font-size: 14px;
  opacity: 0.75;
}

@media (min-width: 601px) {
  .bodyText,
  .contactInformation {
    text-align: center;
  }
}

@media (min-width: 768px) {
  .subtitle,
  .bodyText,
  .contactInformation {
    text-align: start;
  }
}

.contactInformation {
  margin-top: 25px;

  & > ul {
    padding-left: 0;
  }
}

@media (min-width: 992px) {
  .contactInformation {
    margin-top: 140px;
  }
}

.servicePhone::marker,
.serviceEMail::marker {
  content: none;
}

.linkPhone::before,
.linkEMail::before {
  content: "";
  display: inline-block;
  height: 18px;
}

.linkPhone::before {
  width: 18px;
  margin-right: 26px;
  background: url(../assets/img/form-footer-block-img/form-element-img/phone-icon.svg) no-repeat center;
  position: relative;
  top: 2px;
  left: 5px;
}

.linkEMail::before {
  width: 24px;
  background: url(../assets/img/form-footer-block-img/form-element-img/email-icon.svg) no-repeat center;
  margin-right: 20px;
  margin-top: 2px;
  position: relative;
  top: 4px;
  left: 2px;
}

.linkPhone,
.linkEMail {
  color: #FFFFFF;

  &:active,
  &:hover {
    color: #FFFFFF;
  }
}

.linkPhone,
.linkPhone:active,
.linkPhone:hover {
  text-decoration: none !important;
}

</style>