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
        h3.home__title {{ slide.subTitle }}
</template>

<script>
export default {
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
  display: flex;
  justify-content: center;
  align-items: center;

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

    h2,
    h3 {
      margin: 0;
      color: white;
    }
  }
}
</style>
