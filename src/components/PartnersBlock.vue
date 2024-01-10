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
            :slides-per-view="'auto'"
            :space-between="10"
            :slides-offset-before="offsetWidth[0]"
            :speed="750"
            :loop="true"
            :looped-slides="5"
            :loop-fill-group-with-blank="false"
            :keyboard='{
              "enabled": true,
              "onlyInViewport": false,
            }'
            :autoplay='{
              "delay": 2850,
              "disableOnInteraction": false
            }'
            :update-on-images-ready="true"
            @resize="resize"
            @images-ready="customizationBefore('1')"
            @transition-start="getStartedEndedX('1')"
            @touch-end="checkingTransition('1')"
        >
          <swiper-slide v-for="image in images" :key="image.index">
            <div class="slide">
              <div class="img row justify-content-center">
                <img class="col align-self-center"
                     :src="require(`../assets/img/slider-img/${ image.name }.png`)"
                     :alt=image.name />
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="slider">
        <swiper
            :slides-per-view="'auto'"
            :space-between="10"
            :slides-offset-before="offsetWidth[1]"
            :speed="450"
            :loop="true"
            :looped-slides="5"
            :loop-fill-group-with-blank="false"
            :keyboard='{
              "enabled": true,
              "onlyInViewport": false,
            }'
            :autoplay='{
              "delay": 2600,
              "disableOnInteraction": false
            }'
            :update-on-images-ready="true"
            :touch-start-prevent-default="false"
            @resize="resize"
            @images-ready="customizationBefore('2')"
            @transition-start="getStartedEndedX('2')"
            @touch-end="checkingTransition('2')"
        >
          <swiper-slide v-for="image in images" :key="image.index">
            <div class="slide">
              <div class="img row justify-content-center">
                <img class="col align-self-center"
                     :src="require(`../assets/img/slider-img/${ image.name }.png`)"
                     :alt=image.name />
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

const win = window;
const doc = document;

SwiperCore.use([Keyboard, Autoplay]);

export default {
  data() {
    return {
      cntSlider: 2,
      images: [
        { name: "cableman_ru", index: 0 },
        { name: "farbors_ru", index: 1 },
        { name: "kubgu", index: 2 },
        { name: "lpcma_rus_v4", index: 3 },
        { name: "nashagazeta_ch", index: 4 },
        { name: "cableman_ru", index: 5 },
        { name: "farbors_ru", index: 6 },
        { name: "kubgu", index: 7 },
        { name: "lpcma_rus_v4", index: 8 },
        { name: "nashagazeta_ch", index: 9 }
      ],
      offsetWidth: [0, 0],
      marginFactors1: [30.865, 39, 162.875],
      marginFactors2: [86.475, 92.75, 214.865],
      startedX: [-1, -1],
      endedX: [-1, -1]
    }
  },
  name: "PartnersBlock",
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    changeSlidesWidth() {
      const slides = doc.querySelectorAll(".swiper-slide");
      let num = 0;
      for (num; num < slides.length; num += 1) {
        slides[num].style.width = "max-content";
        slides[num].style.height = "max-content";
      }
    },
    resize() {
      const self = this;
      win.addEventListener("resize", () => {
        self.changeSlidesWidth();
        self.calculateOffsets();
      });
    },
    calculateOffsets(sliderNum) {
      const lastCord = sliderNum.length - 1;
      const i = Number.parseInt(sliderNum[lastCord]) - 1;
      const slideWidth = doc.querySelectorAll(".slide")[i].offsetWidth;
      let marginFactors = 0;
      if (i === 0) {
        marginFactors = this.marginFactors1;
      } else {
        marginFactors = this.marginFactors2;
      }
      let marginFactor = marginFactors[0];
      if (win.screen.width >= 600 && win.screen.width < 1024) {
        marginFactor = marginFactors[1];
      } else if (win.screen.width >= 1024) {
        marginFactor = marginFactors[2];
      }
      this.offsetWidth[i] = (slideWidth / 100 * marginFactor).valueOf();
    },
    customizationBefore(sliderNum) {
      this.changeSlidesWidth();
      this.calculateOffsets(sliderNum);
    },
    getStartedEndedX(sliderNum) {
      win.addEventListener("DOMContentLoaded", () => {
        const i = Number.parseInt(sliderNum) - 1;
        const slider = doc.getElementsByClassName(sliderNum)[0];
        const self = this;
        "mousedown touchstart".split(" ").forEach((e) => {
          slider.addEventListener(e, (event) => {
            if (event.type === "touchstart")
              self.startedX[i] = event.touches[0].screenX;
            else {
              if (event.button === 0)
                self.startedX[i] = event.screenX;
            }
          });
        });
        "mousemove touchmove".split(" ").forEach((e) =>  {
          win.addEventListener(e, (event) => {
            if (self.startedX[i] !== -1) {
              if (event.type === "touchmove") {
                self.endedX[i] = event.touches[0].screenX;
              } else {
                self.endedX[i] = event.screenX;
              }
            }
          });
        });
      });
    },
    checkingTransition(sliderNum) {
      const i = Number.parseInt(sliderNum) - 1;
      const slides = doc.querySelectorAll(`.${ sliderNum } .swiper-slide`);
      const swiper = doc.getElementsByClassName("swiper-container")[i].swiper;
      const difference = Math.abs(this.startedX[i] - this.endedX[i]);
      if (this.endedX[i] > -1 && difference > 226) {
        let num = 0;
        for (num; num < slides.length; num += 1) {
          if (slides[num].classList.contains('swiper-slide-active'))
            break;
        }
        if (this.startedX[i] - this.endedX[i] > 0) {
          const nextNum = (num + 1 === slides.length) ? 0 : num + 1;
          swiper.slideTo(nextNum, 200, false);
        } else if (this.startedX[i] - this.endedX[i] < 0) {
          const prevNum = (num - 1 === -1) ? slides.length - 1 : num - 1;
          swiper.slideTo(prevNum, 200, false);
        }
      }
      this.startedX[i] = -1;
      this.endedX[i] = -1;
    }
  }
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
    margin-bottom: 52px;
  }
}

.slider {
  margin-bottom: 12px;
}

.slide {
  width: 37.25vw;
  height: 19.78vw;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  padding: 2px;

  & > .img {
    margin: 0;
    width: 100%;
    height: 100%;

    & > img {
      max-width: 75%;
      width: auto;
      max-height: 75%;
      height: auto;
      object-fit: contain;
    }
  }
}

@media (min-width: 600px) {
  .slide {
    width: 25.675vw;
    height: 14.25vw;
  }
}

@media (min-width: 1024px) {
  .slide {
    width: 15.72vw;
    height: 8.575vw;
  }
}

</style>