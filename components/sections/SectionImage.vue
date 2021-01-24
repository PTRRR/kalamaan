<template lang="pug">
  .image
    img(:src="data.image")
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss">
.image {
  img {
    display: block;
    margin: auto;
    width: 100%;
    max-width: $s-max-width;
  }
}
</style>
