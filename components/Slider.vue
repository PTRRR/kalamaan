<template lang="pug">
.slider
  .slider__slides
    a.slider__slide(v-for='slide in slides', :href='slide.url')
      img(:src='slide.image')
      .slider__legend
        h2.slider__title {{ slide.title }}
        h3.slider__sub-title {{ slide.subTitle }}
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/mixins';

.slider {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &__slide {
    display: flex;
    width: 100%;
    height: 100vh;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__legend {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: $menu-padding;
  }

  &__title,
  &__sub-title {
    font-family: $font-medium;
    color: white;
  }

  &__sub-title {
    font-size: 2rem;
    @include heading-crop;
  }
}
</style>
