<template>
  <div class="block-form-footer-container">
    <div class="block-form-container">
      <div id="requestForSupport" class="block-form container">
        <div class="row">
          <div class="requestMessage col-xs-12 col-md-6">
            <div class="subtitle">
              <h2>Оставить заявку на<br />поддержку сайта</h2>
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

            <div class="contactInformation">
              <ul>
                <li class="servicePhone">
                  <a class="linkPhone" href="tel:88002222673">8 800 222-26-73</a>
                </li>
                <li class="serviceEMail">
                  <a class="linkEMail" href="mailto:info@drupal-coder.ru">info@drupal-coder.ru</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="requestForm col-xs-12 col-md-6">
            <form id="clientInfo">
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
                      <a href="../../public/index.html">*</a>
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
      </div>

      <div class="created-by-block">
        <span>
          Проект ООО «Инитлаб», Краснодар, Россия.<br />
          Drupal является зарегистрированной торговой маркой Dries Buytaert.
        </span>
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

.block-form-container {
  min-height: 547px;
}

.block-form {
  padding-top: 27px;
}

.footer {
  height: 183px;
  border-bottom: 1px solid rgb(256, 256, 256);
  border-top: 1px solid rgba(192, 192, 192, 0.5);
}

.block-form-footer-container {
  background: linear-gradient(254deg, rgba(255, 255, 255, .276) -110%, rgba(255, 255, 255, 0) 68.75%),
  url(../assets/img/D.svg) no-repeat bottom right, url(../assets/img/D-flying.svg) no-repeat center top, #040613;
}

.subtitle,
.contactInformation {
  color: #FFFFFF;
}

.bodyText {
  color: #BBBCBE;
}

.subtitle {
  text-align: center;
}

.bodyText,
.contactInformation {
  text-align: justify;
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
    text-align: justify;
  }
}

.contactInformation > ul {
  padding-left: 0;
}

.servicePhone,
.serviceEMail {
  &::marker {
    content: none;
  }
}

.linkPhone::before {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url(../assets/img/phone-icon.svg) no-repeat center;
  margin-right: 26px;
  position: relative;
  top: 2px;
  left: 2px;
}

.linkEMail::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 18px;
  background: url(../assets/img/email-icon.svg) no-repeat center;
  margin-right: 20px;
  margin-top: 2px;
  position: relative;
  top: 4px;
}

.linkPhone,
.linkPhone:active,
.linkPhone:hover,
.linkEMail,
.linkEMail:active,
.linkEMail:hover{
  color: #FFFFFF;
}

.linkPhone,
.linkEMail {
  font-size: 14px;
  font-weight: 700;
}

.linkPhone,
.linkPhone:active,
.linkPhone:hover {
  text-decoration: none !important;
  font-size: 19px;
}

#clientInfo {
  margin-top: 1px;
  max-width: 480px;
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

.textElement textarea,
.messageText {
  height: 154px;
}

.userAgree > label {
  cursor: pointer;
}

.userAgree {
  margin: 10px 0;
  > label {
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
}

input[name="agreeCheckbox"]:focus + .custom-checkbox,
input[name="agreeCheckbox"]:checked:focus + .custom-checkbox {
  border-color: #ee4d31;
  box-shadow: 0 0 9px calc(1px / 4) #ee4d31;
}

.custom-checkbox::after {
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

input[name="agreeCheckbox"]:checked + .custom-checkbox {
  border-color: #838488;
  &::after {
    rotate: 0deg;
    opacity: 1;
  }
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
    background-color: rgba(241, 77, 52, 0);
  }
}

.social-network-buttons.container {

}

.social-network-buttons > .row {
  column-gap: 12px;
  padding: 54px 0 15px;
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
    background-color: rgba(241, 77, 52, 0);
  }
  > a {
    display: inline-block;
    width: 31px;
    height: 31px;
    position: relative;
    right: 2px;
    bottom: 2px;
  }
}

button[name="facebook"] svg {
  color: #FFFFFF;
  width: 10px;
  height: 31px;
}

button[name="vkontakte"] svg {
  color: #FFFFFF;
  width: 20px;
  height: 31px;
}

button[name="telegram"] svg {
  color: #FFFFFF;
  width: 15px;
  height: 31px;
}

button[name="youtube"] svg {
  color: #FFFFFF;
  width: 20px;
  height: 31px;
}



</style>