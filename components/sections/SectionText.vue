<template lang="pug">
.text(:class='getColorClass(data)')
  h1(v-if='data.title') {{ data.title }}

  p(:style='getParagraphCssStyle(data)') {{ data.content }}
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

    getColorClass(data) {
      return [`text--${data.color}`]
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/mixins';

.text {
  padding: $h-padding * 0.5;

  & + & {
    padding-top: 0;
  }

  h1 {
    font-family: $font-medium;
    font-size: 2rem;
    margin: auto;
    max-width: $s-max-width * 1.5;
    border-color: inherit;
    border-bottom: solid 3px;
    padding-bottom: 0.8rem;
    margin-bottom: 0.8rem;
    @include heading-crop;
  }

  p {
    margin: auto;
    max-width: $s-max-width * 1.5;
  }

  @media screen and (max-width: 1000px) {
    p {
      columns: 1 !important;
    }
  }

  @include color-classes;
}
</style>
