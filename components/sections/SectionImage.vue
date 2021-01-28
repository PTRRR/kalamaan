<template lang="pug">
figure.image
  img(:src='data.image')
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
  background-color: $white;
  padding: 0 $h-padding;

  img {
    display: block;
    margin: auto;
    width: 100%;
    max-width: $s-max-width;
  }

  @media screen and (max-width: $mobile-breakpoint) {
    padding: 0 $gap * 2;
  }
}
</style>
