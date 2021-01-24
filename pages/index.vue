<template lang="pug">
.home
  .home__gallery
    a.home__image(
      v-for="slide in home.gallery"
      :href="slide.url"
    )
      img(:src="slide.image")
      .home__legend
        h2.home__title {{ slide.title }}
        h3.home__sub-title {{ slide.subTitle }}

  sections.home__sections(
    :sections="home.sections"
  )
</template>

<script>
import Sections from '@/components/sections/Sections'

export default {
  components: { Sections },

  async asyncData({ $content }) {
    const home = await $content('home').fetch()
    return {
      home,
    }
  },
}
</script>

<style lang="scss">
.home {
  width: 100%;
  min-height: 100vh;

  &__gallery {
    width: 100%;
    height: 100vh;
  }

  &__image {
    display: flex;
    width: 100%;
    height: 100%;

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
    padding: 1em;
  }

  &__title,
  &__sub-title {
    font-family: $font-medium;
    color: white;
  }

  &__sub-title {
    font-size: 2rem;
  }
}
</style>
