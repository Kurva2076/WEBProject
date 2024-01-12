<template>

  <form id="clientInfo" class="col" @submit.prevent.stop="submit">
    <div
        class="formElement"
        v-for="input in data.inputs"
        :key="input.name"
    >
      <div class="textElement">
        <div :class=input.class>
          <input
              :type=input.type
              :name=input.name
              :placeholder=input.placeholder
              :required=input.required
              v-model="data[input.bindName].value"
              @input="updateValue(input.bindName)"
          />
        </div>
      </div>
    </div>

    <div class="formElement">
      <div class="textElement">
        <div class="messageText">
          <textarea
              name="clientMessage"
              placeholder="Ваш комментарий"
              v-model="data.message.value"
              @input="updateValue('message')"
          ></textarea>
        </div>
      </div>
    </div>

    <div class="formElement">
      <div class="userAgree">
        <label>
          <input
              class="form-check-input"
              type="checkbox"
              name="agreeCheckbox"
              required
              v-model="data.agreement.value"
              @change="updateValue('agreement')"
          />
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
        <button class="button" type="submit" form="clientInfo">СВЯЖИТЕСЬ С НАМИ</button>
      </div>
    </div>
  </form>

</template>

<script>

import { useStore } from "vuex";
import { reactive, watchEffect } from "vue";
// import { useRoute } from 'vue-router';
// import { computed } from 'vue';

export default {
  setup() {
    const accessKey = "904161c0-cec3-49b9-a148-e4f2b826f658";
    const userInfo = useStore();
    const data = reactive({
      agreement: { stateName: "agreement", value: false },
      author: { stateName: "author", value: '' },
      eMail: { stateName: "eMail", value: '' },
      inputs: [
        {
          class: "nameText",
          name: "clientName",
          type: "text",
          placeholder:"Ваше имя",
          bindName: "author",
          required: false
        },
        {
          class: "phoneText",
          name: "clientPhone",
          type: "tel",
          placeholder:"Телефон",
          bindName: "phone",
          required: true
        },
        {
          class: "eMailText",
          name: "clientEMail",
          type: "email",
          placeholder:"E-mail",
          bindName: "eMail",
          required: true
        },
      ],
      message: { stateName: "message", value: '' },
      phone: { stateName: "phone", value: '' }
    });

    const updateValue = (name) => {
      userInfo.commit('increment', data[name]);
    };

    const submit = async () => {
      const sendButton = document.querySelector(".sendButton > button");
      sendButton.innerHTML = "ИДЁТ ОТПРАВКА...";
      // const route = useRoute();
      // const path = computed(() => route.path)
      // console.log(route)

      const response = await fetch("http://localhost:8080/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          agreement: data.agreement.value,
          author: data.author.value,
          eMail: data.eMail.value,
          message: data.message.value,
          phone: data.phone.value
        }),
      });

      const result = await response.json();

      if (result.success === true) {
        sendButton.innerHTML = "ФОРМА УСПЕШНО ОТПРАВЛЕНА";
      } else {
        sendButton.innerHTML = "ПРОИЗОШЛА ОШИБКА";
        console.log(result)
      }
    };

    watchEffect(() => {
      data.author.value = userInfo.getters.getAuthor;
      data.phone.value = userInfo.getters.getPhone;
      data.eMail.value = userInfo.getters.getEMail;
      data.message.value = userInfo.getters.getMessage;
      data.agreement.value = userInfo.getters.getAgreement;
    });

    return {
      data,
      updateValue,
      submit
    }
  },
  name: "FormElement"
}

</script>

<style scoped lang="scss">

.requestForm {
  padding-bottom: 76px;
  min-width: 150px;
  max-width: 510px;
  padding-left: 3px;
  padding-right: 3px;
}

@media (min-width: 768px) {
  .requestForm.row {
    min-width: 384px;
    max-width: 384px;
    padding-left: 15px;
    padding-right: 0;
    justify-content: end;
  }
}

@media (min-width: 992px) {
  .requestForm.row {
    min-width: 495px;
    max-width: 505px;
  }
}

@media (min-width: 1200px) {
  .requestForm.row {
    min-width: 605px;
    max-width: 605px;
    padding-right: 10px
  }
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
    background-image: url("../assets/img/form-footer-block-img/form-element-img/checked-checkbox-icon.svg");
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

</style>