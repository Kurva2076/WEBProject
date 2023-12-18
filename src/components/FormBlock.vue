<template>

  <div class="block-form-footer-container">
    <div class="block-form-container container">
      <div id="requestForSupport" class="block-form row justify-content-center">
          <div class="requestMessage col-xs-12 col-md-6 row">
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
          </div>

          <div class="requestForm col-xs-12 col-md-6 row">
              <form id="clientInfo" class="col">
                <div class="formElement">
                  <div class="textElement">
                    <div class="nameText">
                      <input name="clientName" placeholder="Ваше имя" />
                    </div>
                  </div>
                </div>

                <div class="formElement">
                  <div class="textElement">
                    <div class="phoneText">
                      <input name="clientPhone" placeholder="Телефон" />
                    </div>
                  </div>
                </div>

                <div class="formElement">
                  <div class="textElement">
                    <div class="eMailText">
                      <input type="email" name="clientEMail" placeholder="E-mail" />
                    </div>
                  </div>
                </div>

                <div class="formElement">
                  <div class="textElement">
                    <div class="messageText">
                      <textarea name="clientMessage" placeholder="Ваш комментарий"></textarea>
                    </div>
                  </div>
                </div>

                <div class="formElement">
                  <div class="userAgree">
                    <label>
                      <input class="form-check-input" type="checkbox" name="agreeCheckbox" />
                      <span class="custom-checkbox"></span>
                      <span class="agreementText">
                        Отправляя заявку, я даю согласие на
                        <a href="../../public/index.html">обработку своих персональных данных</a>.
                        <a class="agreement" href="../../public/index.html">*</a>
                      </span>
                    </label>
                  </div>
                </div>

                <div class="formElement">
                  <div class="sendButton">
                    <noscript>type заменить потом на submit</noscript>
                    <button class="button" type="button" form="clientInfo">СВЯЖИТЕСЬ С НАМИ</button>
                  </div>
                </div>
              </form>
          </div>
      </div>
    </div>

    <footer class="footer">
      <div class="social-network-buttons container">
        <div class="row">
          <div class="col">
            <button name="facebook" type="button">
              <a href="../../public/index.html">
                <fa :icon="[ 'fab', 'facebook-f' ]" />
              </a>
            </button>
          </div>

          <div class="col">
            <button name="vkontakte" type="button">
              <a href="../../public/index.html">
                <fa :icon="[ 'fab', 'vk' ]" />
              </a>
            </button>
          </div>

          <div class="col">
            <button name="telegram" type="button">
              <a href="../../public/index.html">
                <fa :icon="[ 'fab', 'telegram-plane' ]" />
              </a>
            </button>
          </div>

          <div class="col">
            <button name="youtube" type="button">
              <a href="../../public/index.html">
                <fa :icon="[ 'fab', 'youtube' ]" />
              </a>
            </button>
          </div>
        </div>

        <div class="created-by-block">
          <span>
            Проект ООО «Инитлаб», Краснодар, Россия.<br />
            Drupal является зарегистрированной торговой маркой Dries Buytaert.
          </span>
        </div>
      </div>
    </footer>
  </div>

</template>

<script>

export default {
  name: "FormBlock",
};

</script>

<style scoped lang="scss">

.block-form-footer-container {
  background: linear-gradient(254deg, rgba(256, 256, 256, .276) -110%, rgba(256, 256, 256, 0) 68.75%),
  url(../assets/img/D.svg) no-repeat bottom right, url(../assets/img/D-flying.svg) no-repeat center top, #040613;
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

.requestForm {
  padding-bottom: 76px;
}

.requestForm.row,
.requestMessage.row {
  min-width: 150px;
  max-width: 510px;
  padding-left: 3px;
  padding-right: 3px;
}

@media (min-width: 768px) {
  .requestForm.row,
  .requestMessage.row {
    min-width: 384px;
    max-width: 384px;
    padding-right: calc(var(--bs-gutter-x) * .5);
    padding-left: calc(var(--bs-gutter-x) * .5);
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
  background: url(../assets/img/phone-icon.svg) no-repeat center;
  position: relative;
  top: 2px;
  left: 5px;
}

.linkEMail::before {
  width: 24px;
  background: url(../assets/img/email-icon.svg) no-repeat center;
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

#clientInfo {
  max-width: 504px;
}

.formElement > .textElement {
  margin-top: 7px;
}

.textElement input,
.textElement textarea {
  width: 100%;
  height: 54px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid rgba(256, 256, 256, 0.3);
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  transition: box-shadow 100ms;

  &:focus {
    outline: none;
    text-decoration-skip-box: none;
    border-color: #ee4d31;
    box-shadow: 0 0 9px calc(1px / 4) #ee4d31;
  }

  &:read-write,
  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    color: #FFFFFF;
  }

  &:read-write {
    padding: 26px 24px;
  }
}

.textElement textarea {
  height: 154px;
}

.userAgree {
  margin: 3px 0 10px;

  & > label {
    cursor: pointer;
    display: flex;
  }
}

.agreementText {
  display: inline-block;
  font-weight: 400;
  font-size: 12px;
  color: #FFFFFF;

  & > a {
    color: #ee4d31;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  & > a[class="agreement"] {
    color: #FF0000;
  }
}

input[name="agreeCheckbox"] {
  position: absolute;
  opacity: 0;
}

.custom-checkbox {
  display: inline-block;
  margin-right: 13px;
  width: 25px;
  height: 25px;
  border: 2px solid rgba(256, 256, 256, 0.5);
  border-radius: 5px;

  &::after {
    display: block;
    content: "";
    position: relative;
    width: 21px;
    height: 21px;
    background-image: url("../assets/img/checked-checkbox-icon.svg");
    background-repeat: no-repeat;
    background-position: center;
    rotate: -30deg;
    opacity: 0;
    transition: rotate 400ms, opacity 200ms;
  }
}

input[name="agreeCheckbox"]:checked + .custom-checkbox {
  border-color: #838488;

  &::after {
    rotate: 0deg;
    opacity: 1;
  }
}

input[name="agreeCheckbox"]:focus + .custom-checkbox,
input[name="agreeCheckbox"]:checked:focus + .custom-checkbox {
  border-color: #ee4d31;
  box-shadow: 0 0 9px calc(1px / 4) #ee4d31;
}

.sendButton > .button {
  width: 100%;
  height: 56px;
  color: #FFFFFF;
  background-color: #F14D34;
  border: 2px solid #F14D34;
  border-radius: 5px;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  align-content: center;
  transition: background-color 300ms;

  &:hover {
    background-color: transparent;
  }
}

.footer {
  min-height: 183px;
  max-height: 550px;
  border-top: 1px solid rgba(256, 256, 256, 0.25);
}

.social-network-buttons.container {
  min-width: 100%;
  max-width: 500px;
  padding-bottom: 34px;
}

@media (min-width: 768px) {
  .social-network-buttons.container {
    min-width: 750px;
    max-width: 750px;
  }
}

@media (min-width: 992px) {
  .social-network-buttons.container {
    min-width: 975px;
    max-width: 975px;
  }
}

@media (min-width: 1200px) {
  .social-network-buttons.container {
    min-width: 1160px;
    max-width: 1160px;
  }
}

.social-network-buttons > .row {
  --bs-gutter-x: -11;
  column-gap: 12px;
  padding-top: 54px;
  padding-bottom: 10px;

  > .col {
    max-width: 31px !important;
    min-width: 31px !important;
    padding: 0;
  }
}

.social-network-buttons button {
  width: 31px;
  height: 31px;
  padding: 0;
  background-color: #F14D34;
  border: 2px solid #F14D34;
  border-radius: 5px;
  transition: background-color 300ms;

  &:hover {
    background-color: transparent;
  }

  & > a {
    display: inline-block;
    width: 31px;
    height: 31px;
    position: relative;
    right: 2px;
    bottom: 2px;
  }
}

button[name="facebook"] svg,
button[name="vkontakte"] svg,
button[name="telegram"] svg,
button[name="youtube"] svg {
  color: #FFFFFF;
  width: 20px;
  height: 31px;
}

button[name="facebook"] svg {
  width: 10px;
}

button[name="telegram"] svg {
  width: 15px;
}

</style>