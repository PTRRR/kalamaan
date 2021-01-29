<template lang="pug">
.home
  slider(:slides='home.gallery')
  sections(:sections='home.sections')
</template>

<script>
import Slider from '@/components/Slider'
import Sections from '@/components/sections/Sections'

export default {
  components: { Slider, Sections },

  async asyncData({ $content }) {
    const home = await $content('home').fetch()
    return {
      home,
    }
  },
}
</script>

<style lang="scss">
.home {
  width: 100%;
  min-height: 100vh;
}
</style>
