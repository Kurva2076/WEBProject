<template>
  <div class="block-form-container">
    <div id="requestForSupport" class="container block-form">
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
                <a href="tel:88002222673">8 800 222-26-73</a>
              </li>
              <li class="serviceEMail">
                <a href="mailto:info@drupal-code.ru">info@drupal-code.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="requestForm col-xs-12 col-md-6">
          <form id="clientInfo">
            <div class="formElement">
              <div class="textElement">
                <div class="nameText">
                  <label>
                    <input name="clientName" placeholder="Ваше имя" />
                  </label>
                </div>
              </div>
            </div>

            <div class="formElement">
              <div class="textElement">
                <div class="phoneText">
                  <label>
                    <input name="clientPhone" placeholder="Телефон" />
                  </label>
                </div>
              </div>
            </div>

            <div class="formElement">
              <div class="textElement">
                <div class="eMailText">
                  <label>
                    <input type="email" name="clientEMail" placeholder="E-mail" />
                  </label>
                </div>
              </div>
            </div>

            <div class="formElement">
              <div class="textElement">
                <div class="messageText">
                  <label>
                    <textarea class="textarea" name="clientMessage"
                              placeholder="Ваш комментарий">
                    </textarea>
                  </label>
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
                    <a class="userAgreement" href="../../public/index.html">обработку своих персональных данных</a>.
                  </span>
                </label>
              </div>
            </div>

            <div class="formElement">
              <div class="sendButton">
                <button class="button" type="button" form="clientInfo">СВЯЖИТЕСЬ С НАМИ</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "FormBlock",
};

</script>

<style scoped lang="scss">

.block-form-container {
  background-color: black;
}

.container.block-form {
  margin-top: 25px;
}

.formElement {
  margin-top: 5px !important;
}

.userAgree > label {
  cursor: pointer;
}

input[name="agreeCheckbox"] {
  position: absolute;
  opacity: 0;
}

.custom-checkbox {
  display: inline-block;
  margin-right: 10px;
  width: 25px;
  height: 25px;
  border: 2px solid #838488;
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

</style>