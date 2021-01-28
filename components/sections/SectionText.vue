<template lang="pug">
article.text(:class='getTextClasses(data)')
  .text__title
    h2(v-if='data.title') {{ data.title }}

  .text__content(
    :style="getParagraphCssStyle(data)"
    v-html="renderMarkdown(data.content)"
  )
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    renderMarkdown(markdown) {
      const md = new MarkdownIt()
      return md.render(markdown)
    },

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
  padding: $v-padding $h-padding;

  & + & {
    padding-top: 0;
  }

  h2 {
    font-family: $font-medium;
    border-color: inherit;
    border-bottom: solid $border-width;
    width: max-content;
    text-transform: uppercase;
    padding-bottom: $v-padding * 0.5;
    margin-bottom: $v-padding * 0.5;
    @include heading-crop;
  }

  p {
    font-family: $font-medium;
  }

  &__title,
  &__content {
    margin: auto;
    max-width: $s-max-width;
  }

  &--columns {
    h2 {
      font-family: $font-medium;
      font-size: $small-font-size;
    }

    p {
      font-family: $font-medium;
      font-size: $small-font-size;
      line-height: 1.3;
    }
  }

  p + p {
    margin-top: 0.5em;
    text-indent: 1.5em;
  }

  @media screen and (max-width: 1000px) {
    padding: $v-padding $h-padding-mobile;

    &__content {
      columns: 1 !important;
    }
  }

  @include color-classes;
}
</style>
