<template lang="pug">
.gallery
  .gallery__columns
    .gallery__columns-inner
      .gallery__column(v-for='index in columns')
        figure.gallery__image(
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
      this.columns = window.innerWidth <= 520 ? 1 : this.columns
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
  padding: 0 $h-padding;

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
    padding: $gap;
    display: flex;
    width: 100%;
    align-items: center;
    flex: 1 1 auto;
    height: min-content;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media screen and (max-width: $mobile-breakpoint) {
    padding: 0 $gap * 2;
  }
}
</style>
