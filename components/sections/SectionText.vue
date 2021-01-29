<template lang="pug">
article.text(:class='getTextClasses(data)')
  .text__title
    h2(v-if='data.title') {{ data.title }}

  .text__content(
    :style='getParagraphCssStyle(data)',
    v-html='renderMarkdown(data.content)'
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
      return [
        `text--${data.color}`,
        {
          'text--columns': data.columns > 1,
          'text--margins': data.margins,
          'text--center': data.center,
          'text--serif': data.serif,
        },
      ]
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/mixins';

.text {
  $t: &;
  padding: $v-padding $h-padding;
  font-family: $font-medium;

  & + & {
    padding-top: 0;
  }

  h2 {
    border-color: inherit;
    /* border-bottom: solid $border-width; */
    width: max-content;
    text-transform: uppercase;
    padding-bottom: $v-padding * 0.5;
    margin-bottom: $v-padding * 0.5;
    @include heading-crop;
  }

  &__title,
  &__content {
    margin: auto;
    max-width: $s-max-width;
  }

  &--columns {
    h2 {
      font-size: $small-font-size;
    }

    p {
      font-size: $small-font-size;
      line-height: 1.3;
    }
  }

  &--margins {
    margin: $v-padding 0;
  }

  &--center {
    text-align: center;

    h2 {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &--serif {
    p {
      font-family: $font-serif;
      line-height: 1.25;
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

  @media screen and (max-width: $mobile-breakpoint) {
    &--margins {
      margin: $gap * 2 0;
    }
  }

  @include color-classes;
}
</style>
