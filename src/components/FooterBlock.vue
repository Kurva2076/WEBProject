<template>

  <footer class="footer">
    <div class="social-network-buttons container">
      <div class="row">
        <div class="col" v-for="icon in icons" :key="icon.index">
          <button type="button" :name=icon.name>
            <a href="../../public/index.html">
              <fa :icon="[ 'fab', icon.fabName ]" />
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

</template>

<script>

export default {
  data() {
    return {
      icons: [
        { name: "facebook", fabName: "facebook-f", index: 0 },
        { name: "vkontakte", fabName: "vk", index: 1 },
        { name: "telegram", fabName: "telegram-plane", index: 2 },
        { name: "youtube", fabName: "youtube", index: 3 },
      ]
    }
  },
  name: "FooterBlock"
}

</script>

<style scoped lang="scss">

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