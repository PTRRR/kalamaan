<template lang="pug">
article.text(:class='getTextClasses(data)')
  h2(v-if='data.title') {{ data.title }}
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

    getTextClasses(data) {
      return [`text--${data.color}`, { 'text--columns': data.columns > 1 }]
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/mixins';

.text {
  $t: &;
  padding: $h-padding * 0.5;

  & + & {
    padding-top: 0;
  }

  h2 {
    font-family: $font-medium;
    font-size: 2rem;
    border-color: inherit;
    /* border-bottom: solid $border-width; */
    padding-bottom: 0.8rem;
    margin-bottom: 0.8rem;
    @include heading-crop;
  }

  h2,
  p {
    margin: auto;
    max-width: $s-max-width;
  }

  &--columns {
    h2,
    p {
      max-width: $s-max-width * 1.5;
    }
  }

  @media screen and (max-width: 1000px) {
    p {
      columns: 1 !important;
    }
  }

  @include color-classes;
}
</style>
