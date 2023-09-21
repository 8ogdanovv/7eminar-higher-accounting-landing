<template>
  <header class="header">
    <p class="p" style="text-transform: capitalize;">
      {{ `${'ВИЩА БУХГАЛТЕРСЬКА ONLINE-АКАДЕМІЯ'.toLocaleLowerCase()}` }}
    </p>
    <h1 class="h1">
      Підвищення кваліфікації та профперепідготовка для бухгалтерів
    </h1>
    <Button
      text="Обрати навчання >>"
      link="https://7eminar.ua/events/type/professions"
    />
    <SwiperSection :swiperImages="swiperImages" />
  </header>
</template>

<script>
import Button from '~/components/Button.vue';
import SwiperSection from '~/components/SwiperSection.vue';

export default {
  components: {
    Button,
    SwiperSection,
  },
  data() {
    return {
      swiperImages: [
        './assets/assets/images/image1.png', // Corrected path
        './assets/assets/images/image2.png', // Corrected path
        './assets/assets/images/image3.png', // Corrected path
      ],
    };
  },
  mounted() {
    console.log(this.swiperImages);
  },
};
</script>

<style>

.header {
  max-width: 1078px;
}
</style>
