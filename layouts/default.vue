<template lang="pug">
.app
  main-menu
  nuxt
</template>

<script>
import MainMenu from '@/components/MainMenu'

export default {
  components: { MainMenu },
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
  font-size: 22px;
}
</style>
