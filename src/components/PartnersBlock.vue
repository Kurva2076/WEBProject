<template>
  <section id="our-partners">
    <div class="block-partners-container container-fluid">
      <h2 class="title text-center">С нами работают</h2>

      <div class="service-message">
        <span>
          Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои сайты.
          Мы делаем всё, чтобы наше сотрудничество было долгим.
        </span>
      </div>


      <div class="slider">
        <swiper
            :init="false"
            :slides-per-view="3"
            :space-between="10"
            :loop="true"
            :looped-slides="3"
            :keyboard='{
              "enabled": true,
              "onlyInViewport": false,
            }'
            :autoplay= '{
              "delay": 2000,
              "disableOnInteraction": false
            }'
            :update-on-images-ready="true"
            @images-ready="changeSlidesWidth"
            @slideChange="changeSlidesWidth"
        >
          <swiper-slide v-for="image in images" :key="image.index">
            <div class="slide">
              <div class="img row justify-content-center">
                <img class="col align-self-center" :src="require(`../assets/img/slider-img/${ image.name }.png`)" :alt=image.name />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>

import SwiperCore, { Keyboard, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';

const doc = document;

SwiperCore.use([Keyboard, Autoplay]);

export default {
  data() {
    return {
      images: [
        { name: "cableman_ru", index: 0 },
        { name: "farbors_ru", index: 1 },
        { name: "kubgu", index: 2 },
        { name: "lpcma_rus_v4", index: 3 },
        { name: "nashagazeta_ch", index: 4 },
        // { name: "cableman_ru", index: 5 },
        // { name: "farbors_ru", index: 6 },
        // { name: "kubgu", index: 7 },
        // { name: "lpcma_rus_v4", index: 8 },
        // { name: "nashagazeta_ch", index: 9 }
      ]
    }
  },
  name: "PartnersBlock",
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    changeSlidesWidth() {
      const slidesDuplicate = doc.getElementsByClassName("swiper-slide");
      let num = 0;
      for (num; num < slidesDuplicate.length; num += 1) {
        slidesDuplicate[num].style.width = "max-content";
      }
    }
  },
}

</script>

<style scoped lang="scss">

#our-partners {
  background-color: #FFFFFF;
  color: #050C33;
  margin-top: 60px;
  margin-bottom: 60px;
}

.block-partners-container {
  padding-left: 0;
  padding-right: 0;
}

@font-face {
  font-family: "Montserrat-Bold";
  src: url("../assets/fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
}

.title {
  font-family: "Montserrat-Bold", system-ui !important;
  font-size: 24px;
  margin-bottom: 15px;
}

@media (min-width: 768px) {
  .title {
    font-size: 32px;
    margin-bottom: 8px;
  }
}

@media (min-width: 992px) {
  .title {
    font-size: 36px;
  }
}

@media (min-width: 1082px) {
  .title {
    font-size: 42px !important;
  }
}

.service-message {
  max-width: 740px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-right: calc(var(--bs-gutter-x) * .5 + 3px);
  padding-left: calc(var(--bs-gutter-x) * .5 + 3px);
  line-height: 22px;
  font-size: calc(16px + 1px / 4);
  font-weight: 700;
  opacity: 0.75;
}

@media (min-width: 601px) {
  .service-message {
    text-align: center;
  }
}

.slide {
  width: 162px;
  height: 86px;
  border: 2px #000 solid;
  padding: 2px;

  & > .img {
    margin: 0;
    width: 100%;
    height: 100%;

    & > img {
      width: 75%;
      height: 75%;
      object-fit: contain;
    }
  }
}

</style>