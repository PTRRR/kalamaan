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
@font-face {
  font-family: Pressura;
  src: url('~static/fonts/GT-Pressura-Regular-Trial.woff2');
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  font-family: Pressura, Arial, Helvetica, sans-serif;
  font-size: 22px;
}
</style>
