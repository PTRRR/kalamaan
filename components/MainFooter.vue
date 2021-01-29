<template lang="pug">
footer.footer
  .footer__inner
    .footer__column
      div(v-html='renderMarkdown(aboutPage.address)')
      br
      p.footer__row
        span T
        span {{ aboutPage.phone }}
      p.footer__row
        span M
        span {{ aboutPage.mail }}

    .footer__column
      a Chi siamo
      a Novita
      a Contatti

    .footer__column
      a.footer--hightlight Dona
</template>

<script>
import { mapGetters } from 'vuex'
import { renderMarkdown } from '@/utils/markdown'

export default {
  computed: {
    ...mapGetters(['aboutPage']),
  },

  methods: {
    renderMarkdown,
  },
}
</script>

<style lang="scss">
@import '@/styles/mixins';

.footer {
  color: $white;
  background-color: $green;
  padding: $v-padding $h-padding;
  font-family: $font-medium;

  a {
    display: block;
  }

  &--hightlight {
    @include regular-crop;
    padding: $menu-padding * 0.5;
    margin: -$menu-padding * 0.5 0;
    background-color: $red;
    color: $white !important;
    width: min-content;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: $s-max-width;
  }

  &__row {
    display: flex;

    span:nth-child(1) {
      display: block;
      width: 1.5rem;
    }
  }

  @media screen and (max-width: $mobile-breakpoint) {
    padding: $v-padding;

    &__inner {
      display: block;
    }

    &__column {
      & + & {
        margin-top: 1rem;
      }
    }
  }
}
</style>
