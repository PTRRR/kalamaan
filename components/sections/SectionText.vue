<template lang="pug">
  .text
    h1(
      v-if="data.title"
    ) {{ data.title }}

    p(
      :style="getParagraphCssStyle(data)"
    ) {{ data.content }}
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
    getParagraphCssStyle(data) {
      return {
        columns: data.columns,
      }
    },
  },
}
</script>

<style lang="scss">
.text {
  padding: $h-padding;

  & + & {
    padding-top: 0;
  }

  h1 {
    margin: auto;
    margin-bottom: 1rem;
    max-width: $s-max-width;
  }

  p {
    margin: auto;
    max-width: $s-max-width;
  }
}
</style>
