<template>
  <section class="swiper-section">
    <swiper
      :modules="modules"
      :space-between="25"
      :slides-per-view="3"
      :breakpoints="{
        1077: {
          slidesPerView: 1,
        },
      }"
      :navigation="{
        prevEl: prev,
        nextEl: next,
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="swiper"
    >
      <swiper-slide
        v-for="(image, index) in swiperImages"
        :key="uuidv4()"
        class="slide"
        :style="{
          paddingTop: index % 2 === 0 ? '48px' : '',
          paddingBottom: index % 2 !== 0 ? '48px' : '',
        }"
      >
        <img
          :src="image"
          :alt="`image ${index}`"
          class="slide-image"
        />
      </swiper-slide>
    </swiper>
    <nav class="swiper-nav">
      <img
        ref="prev"
        src="../assets/svg/slide_prev_45x44.svg"
        alt="prev"
        class="swiper-button-prev nav-image"
      />

      <img
        ref="next"
        src="../assets/svg/slide_next_45x44.svg"
        alt="next"
        class="swiper-button-next nav-image"
      />
    </nav>
  </section>
</template>

<script>
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 for generating unique keys

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper core and required modules
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  props: {
    swiperImages: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    const prev = ref(null);
    const next = ref(null);

    

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation],
      prev,
      next,
      uuidv4, // Expose uuidv4 for generating unique keys
    };
  },
};
</script>

<style scoped>
.slider-image {
  width: 290px;
  height: 593px;
}

.swiper-section {
  position: relative;
  padding-bottom: 21px;
}
.slide {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1078px) {
  .slide {
    width: 100dvw !important;
  }
}

.swiper-nav {
  width: 100%;
  position: absolute;
  bottom: 0;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
}

.swiper-button-prev {
  left: calc(50dvw - 48px);
}

.swiper-button-next {
  right: calc(50dvw - 48px);
}
.nav-image {
  width: 44px;
  height: 44px;
}
</style>
