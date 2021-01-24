<template lang="pug">
  .gallery
    .gallery__columns
      .gallery__columns-inner
        .gallery__column(
          v-for="index in 3"
        )
          .gallery__image(
            v-for="image in getColumnImages(data.images, index - 1)"
          )
            img(:src="image.image")
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    getColumnImages(images, columnIndex) {
      return images.filter((it, index) => index % 3 === columnIndex)
    },
  },
}
</script>

<style lang="scss">
.gallery {
  &__columns {
    margin: auto;
    max-width: $s-max-width;

    &-inner {
      display: flex;
      margin: -$gap;
    }
  }

  &__column {
    width: 33%;
    flex: 1 1 auto;
  }

  &__image {
    padding: 0.2rem;
    display: flex;
    width: 100%;

    img {
      width: 100%;
    }
  }
}
</style>
