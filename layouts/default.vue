<template lang="pug">
.app(:class='appCssClasse')
  main-menu
  nuxt
  main-footer
</template>

<script>
import MainMenu from '@/components/MainMenu'
import MainFooter from '@/components/MainFooter'

export default {
  components: { MainMenu, MainFooter },
  async asyncData({ $content }) {
    const about = await $content('contatti').fetch()
    console.log(about)
    return {
      about,
    }
  },
  computed: {
    appCssClasse() {
      return {
        'app--lock': this.$store.getters.menuPanel,
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/styles/reset';
@import '@/styles/main';

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  font-family: $font, Arial, Helvetica, sans-serif;
  font-size: #{$font-size}px;
  background-color: $white;
}

.app {
  @media screen and (max-width: $mobile-breakpoint) {
    &--lock {
      height: 100vh;
      overflow: hidden;
    }
  }
}
</style>
