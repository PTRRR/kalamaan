<template lang="pug">
.gallery
  .gallery__columns
    .gallery__columns-inner
      .gallery__column(v-for='index in columns')
        .gallery__image(
          v-for='image in getColumnImages(data.images, index - 1)'
        )
          img(:src='image.image')
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  data() {
    return {
      columns: 3,
    }
  },

  mounted() {
    window.addEventListener('resize', () => this.updateColumns())
    this.updateColumns()
  },

  methods: {
    updateColumns() {
      this.columns = window.innerWidth <= 720 ? 2 : 3
    },

    getColumnImages(images, columnIndex) {
      return images.filter((it, index) => index % this.columns === columnIndex)
    },
  },
}
</script>

<style lang="scss">
.gallery {
  background-color: $white;

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
    display: flex;
    flex-direction: column;
  }

  &__image {
    padding: 0.2rem;
    display: flex;
    width: 100%;
    align-items: center;
    flex: 1 1 auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
